module.exports = {


  friendlyName: 'Crear',


  description: 'Crear something.',


  inputs: {
    comentarioId: {
      description: 'El ID del comentario',
      type: 'number',
      requried: true,
    },
    // contenido: {
    //   description: 'El comentario que será actualizdo',
    //   type: 'string',
    //   required: true
    // },
    contenido: {
      description: 'El comentario que será actualizdo',
      type: 'json',
      required: true
    },
  },


  exits: {
    success: {
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {

    // await Comentario.update({ id: inputs.comentarioId }, { descripcion: inputs.contenido });
    await Cerrajero.update({ id: inputs.comentarioId }, inputs.contenido);
    // All done.
    return exits.success('/');

  }


};
