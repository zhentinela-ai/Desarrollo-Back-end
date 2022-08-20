module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    // sails.log.info("INFO")

    const articulos = await Articulo.find().populate('usuario').populate('comentarios')

    // sails.log.warn("WARN")
    // sails.log.error("ERROR")
    // sails.log.debug(articulos)


    return exits.success({articulos: articulos});
  }


};
