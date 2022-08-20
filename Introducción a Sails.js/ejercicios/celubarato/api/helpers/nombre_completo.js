/* eslint-disable linebreak-style */
module.exports = {
  fiendlyName: '',


  description: '',


  inputs: {
    nombre: {
      type: 'string',
      example: 'luis',
      descripcion: 'The name of the person to great.',
      required: true,
    },
    apellido: {
      type: 'string',
      example: 'blanco',
      descripcion: 'The name of the person to great.',
      required: true,
    },
  },


  fn: async function (inputs, exits) {
    let result = `${inputs.nombre} ${inputs.apellido}`;
    return exits.success(result);
  }

};
