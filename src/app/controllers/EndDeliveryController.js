import Delivery from '../models/Delivery';
import Signature from '../models/Signature';

class EndDeliveryController {
  async update(req, res) {
    const timeNow = new Date();
    // const timeNow = parseISO('2020-03-06T12:01:00-03:00');

    const delivery = await Delivery.findByPk(req.params.id);

    if (delivery.end_date) {
      return res.status(400).json({ error: 'already delivered' });
    }

    delivery.end_date = timeNow;

    await delivery.save();

    if (req.file && !delivery.signature_id) {
      const { originalname: name, filename: path } = req.file;
      const signature = await Signature.create({
        name,
        path,
      });

      delivery.signature_id = signature.id;
      await delivery.save();
    }
    return res.json(delivery);
  }
}

export default new EndDeliveryController();
