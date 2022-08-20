```Javascript



  inputs: {
    precio: {
      type: 'number',
      required: false
    }
  },


let articulos
    if (inputs.precio) {
      articulos = await Articulo.find({ precio: { ">": inputs.precio } }).populate('usuario').populate('comentarios')
    }
    else {
      articulos = await Articulo.find().populate('usuario').populate('comentarios')
    }

console.log('inputs: ', inputs.precio);

module.exports = {

  friendlyName: '',


  description: '',


  inputs: {

  },


  fn: async function (inputs, exits) {
    let result
    return exits.success(result)
  }

}

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


    let result = `${inputs.nombre} ${inputs.apellido}`



let nombreCompleto = await sails.helpers.nombreCompleto("juan", "gil")
    console.log('nombreCompleto: ', nombreCompleto);


```
