module.exports = {


  friendlyName: 'Crear funcion',


  description: '',


  inputs: {
    hour: {
      type: 'string',
      required: true,
    },
    eventId: {
      type: 'number',
      required: true,
    },
    placeId: {
      type: 'number',
      required: true,
    },
  },


  exits: {
    success: {
      responseType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {

    const { hour, eventId, placeId } = inputs;
    sails.log.debug(inputs);
    await Funcion.create({ hora: hour, lugar: placeId, evento: eventId });
    // All done.
    return exits.success('/');

  }


};
