module.exports = {


  friendlyName: 'Editar',


  description: 'Editar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    await Articulos.update({ id: 7 }, { descripcion: 'Perfecto estado' });
    // All done.
    return exits.success('/');

  }


};
