module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    await Articulos.destroy({ id: 4 });
    // All done.
    return exits.success('/');

  }


};
