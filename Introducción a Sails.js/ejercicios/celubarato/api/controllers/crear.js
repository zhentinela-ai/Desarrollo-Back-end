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

    // const nuevo = await Usuario.create({
    //   nombre: 'Carlos',
    //   email: 'carlos@emal.com'
    // });

    await Articulos.create({
      marca: 'pera',
      modelo: 'ipon7',
      descripcion: 'Bueno',
      precio: 100,
      usuario: 1
    });

    // All done.
    return exits.success('/');

  }


};
