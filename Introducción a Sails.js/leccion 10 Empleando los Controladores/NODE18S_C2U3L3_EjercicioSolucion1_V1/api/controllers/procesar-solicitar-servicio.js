module.exports = {


  friendlyName: 'Procesar solicitar servicio',


  description: '',


  inputs: {

      nombre: {
        type: 'string',
        required: true
      },

      apellido: {
        type: 'string',
        required: true
      },

      descripcion: {
        type: 'string',
        required: true
      },

      email: {
        type: 'string',
        required: true
      },

      telefono: {
        type: 'string',
        required: true
      },
  },


  exits: {

    success: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    await Servicio.create({
      nombre: inputs.nombre,
      apellido: inputs.apellido,
      descripcion: inputs.descripcion,
      email: inputs.email,
      telefono: inputs.telefono
    })

    return exits.success('/');

  }


};
