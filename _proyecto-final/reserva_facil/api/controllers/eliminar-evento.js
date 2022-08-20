module.exports = {


  friendlyName: 'Eliminar evento',


  description: '',


  inputs: {
    eventId: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    success: {
      responseType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {

    const id = inputs.eventId;
    await Evento.destroy({ id });
    sails.log.debug(inputs);
    // All done.
    return exits.success('/');

  }


};
