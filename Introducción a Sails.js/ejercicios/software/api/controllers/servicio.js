module.exports = {


  friendlyName: 'Servicio',


  description: 'Servicio something.',


  inputs: {
    body: {
      descripcion: 'Aquí se resiven los datos del formulario',
      type: 'json',
      required: true,
    }
  },


  exits: {
    success: {
      responseType: 'redirect'
    },
  },


  fn: async function (inputs, exits) {

    // console.log(inputs.body);
    await Solicitud.create(inputs.body);
    // All done.
    return exits.success('/');

  }


};
