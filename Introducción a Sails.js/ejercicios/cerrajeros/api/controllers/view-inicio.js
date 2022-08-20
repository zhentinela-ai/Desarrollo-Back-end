module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    const cerrajeros = await Cerrajero.find().populate('comentario').populate('empresas');
    // console.log(cerrajeros);
    // Respond with view.
    return exits.success({ cerrajeros });

  }


};
