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

    let articulo = await Articulo.update({id: 3}, {descripcion: "Buen estado"})
    return exits.success("/");

  }


};
