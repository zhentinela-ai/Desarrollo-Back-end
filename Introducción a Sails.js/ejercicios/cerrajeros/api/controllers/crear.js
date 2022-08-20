module.exports = {


  friendlyName: 'Crear',


  description: 'Crear something.',


  inputs: {
    comentarioId: {
      description: 'El ID del comentario',
      type: 'number',
      requried: true,
    },
    contenido: {
      description: 'El usuario cerrajero que será creado',
      type: 'json',
      required: true
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {

    const bitacora = await Bitacora.find();
    console.log(bitacora);
    console.log();
    await Cerrajero.create(inputs.contenido);
    // All done.
    return exits.success('/');

  }


};
