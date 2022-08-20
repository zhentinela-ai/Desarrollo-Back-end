module.exports = {


  friendlyName: 'View reserva',


  description: 'Display "Reserva" page.',

  inputs: {
    functionId: {
      type: 'number',
      required: true,
    },
    quantity: {
      type: 'number',
      required: true,
    },
    currentCapacity: {
      type: 'number',
      required: true,
    },
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/reserva'
    }

  },


  fn: async function (inputs) {

    var { functionId, quantity, currentCapacity } = inputs;

    const funcion = await Funcion.find({ id: functionId }).populate('lugar').populate('evento').populate('reservas');
    // sails.log.debug(inputs);

    // Respond with view.
    return {
      funcion: funcion[0],
      quantity,
      currentCapacity,
    };

  }


};
