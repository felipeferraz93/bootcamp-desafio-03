import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string().required(),
      numero: Yup.number().required(),
      estado: Yup.string().required(),
      cidade: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { nome } = req.body;

    const recipientExists = await Recipient.findOne({ where: { nome } });

    if (recipientExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const {
      id,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }

  async uptade(req, res) {
    const { nome } = req.body;

    const recipient = await Recipient.findOne({ where: { nome } });

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      rua: Yup.string(),
      numero: Yup.number(),
      estado: Yup.string(),
      cidade: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const {
      id,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      id,
      nome,
      rua,
      numero,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}

export default new RecipientController();
