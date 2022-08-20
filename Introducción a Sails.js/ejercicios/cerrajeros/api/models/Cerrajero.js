/**
 * Cerrajero.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    nombre: {
      type: 'string',
      required: true,
      minLength: 2
    },

    telefono: {
      type: 'number',
      required: true,
      min: 2
    },

    zona: {
      type: 'string',
      required: true,
      minLength: 2
    },

    horario: {
      type: 'string',
      required: true,
      minLength: 2
    },

    disponibilidad: {
      type: 'boolean',
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    comentario: {
      model: 'comentario',
      columnName: 'comentario_id'
    },

    empresas: {
      model: 'empresas',
      columnName: 'empresa_id'
    }

    // comentario: {
    //   collection: 'comentario',
    //   via: 'cerrajero'
    // },

  },

  async beforeCreate(valores, proceed) {
    await Bitacora.create({ descripcion: 'Cerrajero creado' });
    return proceed();
  },

  async beforeDestroy(valores, proceed) {
    await Bitacora.create({ descripcion: 'Cerrajero eliminado' });
    return proceed();
  },

  async beforeUpdate(valores, proceed) {
    await Bitacora.create({ descripcion: 'Cerrajero actualizado' });
    return proceed();
  },

};

