import * as Yup from 'yup';
import Problem from '../models/Problem';
import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import CanceleddeliveryMail from '../jobs/CanceleddeliveryMail';
import Queue from '../../lib/Queue';

class ProblemsController {
  async index(req, res) {
    const problems = await Problem.findAll();

    return res.json(problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { description } = req.body;
    const { delivery_id } = req.params;

    const problem = { description, delivery_id };

    await Problem.create({ description, delivery_id });

    return res.json(problem);
  }

  async update(req, res) {
    const { id } = req.params;

    const { delivery_id } = await Problem.findByPk(id);

    const delivery = await Delivery.findByPk(delivery_id, {
      include: [
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['name', 'email'],
        },
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'nome',
            'rua',
            'numero',
            'complemento',
            'estado',
            'cidade',
            'cep',
          ],
        },
      ],
    });

    delivery.canceled_at = new Date();

    await delivery.save();

    await Queue.add(CanceleddeliveryMail.key, {
      delivery,
    });

    return res.json(delivery);
  }
}

export default new ProblemsController();
