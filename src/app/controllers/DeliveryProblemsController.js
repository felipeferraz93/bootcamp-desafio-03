import Problems from '../models/Problem';

class DeliveryProblemsController {
  async index(req, res) {
    const problems = await Problems.findAll({
      where: {
        delivery_id: req.params.delivery_id,
      },
    });

    if (!problems) {
      return res.json({ Message: 'the delivery does not have any problem' });
    }

    return res.json(problems);
  }
}

export default new DeliveryProblemsController();
