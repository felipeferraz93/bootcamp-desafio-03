import {
  isAfter,
  isBefore,
  setMinutes,
  setHours,
  setSeconds,
  parseISO,
  format,
  startOfDay,
  endOfDay,
} from 'date-fns';
import { Op } from 'sequelize';
import Delivery from '../models/Delivery';

class StartDeliveryController {
  async update(req, res) {
    const timeNow = new Date();
    // const timeNow = parseISO('2020-03-06T12:01:00-03:00');

    const schedule = ['08:00', '18:00'];

    const journey = schedule.map(time => {
      const [hour, minute] = time.split(':');
      const value = setSeconds(setMinutes(setHours(timeNow, hour), minute), 0);

      return {
        time,
        value: format(value, "yyyy-MM-dd'T'HH:mm:ssxxx"),
      };
    });

    const beginOfJourney = parseISO(journey[0].value);
    const endOfJourney = parseISO(journey[1].value);

    if (
      !(isAfter(timeNow, beginOfJourney) && isBefore(timeNow, endOfJourney))
    ) {
      return res.json({ msg: 'fora de horário!' });
    }

    const delivery = await Delivery.findByPk(req.body.id);

    const { count } = await Delivery.findAndCountAll({
      where: {
        deliveryman_id: delivery.deliveryman_id,
        start_date: {
          [Op.between]: [startOfDay(timeNow), endOfDay(timeNow)],
        },
      },
    });

    console.log(count);

    if (count === 5) {
      return res
        .status(400)
        .json({ msg: 'Only 5 deliveries per day are permited!' });
    }

    if (delivery.start_date) {
      return res.status(400).json({ error: 'delivery already started' });
    }

    delivery.start_date = timeNow;

    await delivery.save();

    return res.json(delivery);
    // return res.json(count);
  }
}

export default new StartDeliveryController();
