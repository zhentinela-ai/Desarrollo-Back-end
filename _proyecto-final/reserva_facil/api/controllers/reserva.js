module.exports = {


  friendlyName: 'Reserva',


  description: 'Reserva something.',


  inputs: {
    functionId: {
      type: 'number',
      required: true,
    },
    quantity: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    phone: {
      type: 'string',
      required: true,
    },
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    const {
      functionId,
      quantity,
      email,
      phone } = inputs;

    for (let i = 0; i < quantity; i++) {
      await Reserva.create({ email, telefono: phone, funcion: functionId });
    }

    sails.log.debug(inputs);
    // sails.log.debug(lugar);

    // All done.
    exits.success('/');

  }


};
