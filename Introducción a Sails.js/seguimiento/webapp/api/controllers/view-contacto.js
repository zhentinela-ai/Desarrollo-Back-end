module.exports = {


  friendlyName: 'View contacto',


  description: 'Display "Contacto" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/contacto'
    }

  },


  fn: async function (input, exits) {

    // Respond with view.
    const vendedores = await Vendedor.find();
    // Respond with view.
    return exits.success({ vendedores });

  }


};
