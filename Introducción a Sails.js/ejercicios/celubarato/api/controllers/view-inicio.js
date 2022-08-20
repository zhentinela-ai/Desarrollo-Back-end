module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',

  inputs: {
    precio: {
      type: 'number',
      required: false
    }
  },

  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view
    // const articulos = await Articulos.find();
    // const articulos = await Articulos.find({
    //   precio: {
    //     '>': 25
    //   }
    // });
    // const articulos = await Articulos.find({
    //   where: {
    //     precio: {
    //       '>': 15
    //     }
    //   },
    //   // skip: '',
    //   sort: 'precio ASC'
    // });

    // const articulos = await Articulos.find().populate('usuario').populate('comentarios');

    await sails.helpers.nombreCompleto('juan', 'caliballo');

    let articulos;
    if (inputs.precio) {
      articulos = await Articulos.find({ precio: { '>': inputs.precio } }).populate('usuario').populate('comentarios');
    } else {
      articulos = await Articulos.find().populate('usuario').populate('comentarios');
    }

    // console.log(articulos);
    // Respond with view.
    // console.log(nombreCompleto);

    // sails.log.info('Info');
    // sails.log.warn('WARNING');
    // sails.log.error('ERROR');
    // sails.log.debug(articulos);

    return exits.success({ articulos });

  }


};
