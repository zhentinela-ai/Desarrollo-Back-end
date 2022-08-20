module.exports = {


  friendlyName: 'Eliminar funcion',


  description: '',


  inputs: {
    functionId: {
      type: 'number',
      required: true,
    }
  },


  exits: {
    success: {
      responseType: 'redirect',
    }
  },


  fn: async function (inputs, exits) {

    sails.log.debug(inputs);
    await Funcion.destroy({ id: inputs.functionId });
    // All done.
    return exits.success('/');

  }


};
