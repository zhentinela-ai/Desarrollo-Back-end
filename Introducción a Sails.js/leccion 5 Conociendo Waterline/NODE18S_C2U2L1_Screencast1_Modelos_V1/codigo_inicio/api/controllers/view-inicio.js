module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    const articulos = await Articulo.find()
    console.log('articulos222: ', articulos);
    return exits.success({articulos: articulos});


  }


};
