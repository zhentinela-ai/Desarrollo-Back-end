module.exports = {


  friendlyName: 'View servicio',


  description: 'Display "Servicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/servicio'
    }

  },


  fn: async function (inputs, exits) {

    const data = await Solicitud.find();
    // console.log(data);
    // Respond with view.
    return exits.success({});

  }


};
