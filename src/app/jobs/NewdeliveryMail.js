import Mail from '../../lib/Mail';

class NewdeliveryMail {
  get key() {
    return 'NewdeliveryMail.js';
  }

  async handle({ data }) {
    const { delivery } = data;

    console.log('a fila executou');

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Nova Encomenda para Entrega',
      template: 'newdelivery',
      context: {
        entregador: delivery.deliveryman.name,
        produto: delivery.product,
        local: delivery.recipient.nome,
        rua: delivery.recipient.rua,
        numero: delivery.recipient.numero,
        complemento: delivery.recipient.complemento,
        estado: delivery.recipient.estado,
        cidade: delivery.recipient.cidade,
        cep: delivery.recipient.cep,
      },
    });
  }
}

export default new NewdeliveryMail();
