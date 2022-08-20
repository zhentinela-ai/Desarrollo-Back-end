module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    let nombreCompleto = await sails.helpers.nombreCompleto("ana", "gil")

    console.log('nombreCompleto: ', nombreCompleto);

    const articulos = await Articulo.find().populate('usuario').populate('comentarios')
    return exits.success({articulos: articulos});
  }


};
