module.exports = {


  friendlyName: 'Crear',


  description: 'Crear something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {


    const nuevo = await Articulo.create({
      descripcion: "Poco uso",
      marca: "naranja",
      modelo: "N1",
      precio: 25
    })

    return exits.success("/");

  }


};
