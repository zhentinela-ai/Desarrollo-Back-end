module.exports = {

  friendlyName: '',


  description: '',


  inputs: {

    nombre: {
      type: 'string',
      example: 'luis',
      description: 'The name of the person to greet.',
      required: true
    },

    apellido: {
      type: 'string',
      example: 'blanco',
      description: 'The name of the person to greet.',
      required: true
    }


  },


  fn: async function (inputs, exits) {
    let result = `${inputs.nombre} ${inputs.apellido}`
    return exits.success(result)
  }

}
