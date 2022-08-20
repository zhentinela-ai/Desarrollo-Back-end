module.exports = {


  friendlyName: 'Actualizar comentarios',


  description: 'Actualizar comentarios',

  inputs: {
    comentarioId: {
      type: 'string'
    },
    contenido: {
      type: 'string'
    }
  },

  exits: {
    success: {
      responseType: 'redirect'
    }
  },

  fn: async function (inputs, exits) {
    await Comentario.update({ id: inputs.comentarioId }, { contenido: inputs.contenido })
    return exits.success('/');
  }

};
