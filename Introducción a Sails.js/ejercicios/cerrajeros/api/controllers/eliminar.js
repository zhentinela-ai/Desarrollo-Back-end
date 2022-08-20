module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar something.',


  inputs: {
    comentarioId: {
      description: 'El ID del comentario',
      type: 'number',
      required: true,
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    // await Comentario.destroy({ id: inputs.comentarioId });
    await Cerrajero.destroy({ id: inputs.comentarioId });
    console.log('Comentario elimidado');
    // All done.
    return exits.success('/');

  }


};
