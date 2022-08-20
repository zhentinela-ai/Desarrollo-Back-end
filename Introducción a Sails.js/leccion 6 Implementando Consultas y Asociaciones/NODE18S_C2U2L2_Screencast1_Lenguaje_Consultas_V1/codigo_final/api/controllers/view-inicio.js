module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {
    const articulos = await Articulo.find({
      where: {

        precio: {
          '>': 20
        }

      },
      sort: 'precio ASC'
    })
    return exits.success({articulos: articulos});
  }


};
