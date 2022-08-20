module.exports = {


  friendlyName: 'Crear evento',


  description: '',


  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
      required: true,
    }
  },


  exits: {
    success: {
      resposenType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {

    var { name, image } = inputs;
    image = `/images/${image}`;
    await Evento.create({ nombre: name, imagen: image });
    sails.log.debug(inputs);
    // All done.
    return exits.success('/admin/principal');

  }


};
