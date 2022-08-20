module.exports = {


  friendlyName: 'Editar evento',


  description: '',


  inputs: {
    eventId: {
      description: 'Aquí se recibe el id del evento a ser actualizado',
      type: 'string',
    },
    name: {
      description: 'Aquí se recibe el nombre del evento a ser editado',
      type: 'string',
      required: true,
    },
    image: {
      description: 'Aquí se recibe la imagen del evento a ser editado',
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

    var { eventId, name, image } = inputs;
    eventId = Number(eventId);
    image = `/images/${image}`;
    // sails.log.debug(eventId);
    // sails.log.debug(name);
    // sails.log.debug(image);

    await Evento.update({ id: eventId }, { nombre: name, imagen: image });

    // All done.
    return exits.success('/admin/principal');

  }


};
