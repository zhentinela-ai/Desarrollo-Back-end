module.exports = {


  friendlyName: 'Espectador',


  description: 'Espectador something.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/homepage'
    }
  },


  fn: async function (inputs, exits) {

    var eventos = await Evento.find().populate('lugares');

    eventos = await Promise.all(
      eventos.map(async evento => {
        await Promise.all(evento.lugares)
        .then(values => {
          evento.lugares = values.map(async lugar => {
            let funciones = await Funcion.find({ lugar: lugar.id, evento: evento.id })
            .populate('lugar')
            .populate('reservas');
            lugar.funciones = funciones;
            return lugar;
          });
        });
        for (const lugar of evento.lugares) {
          const _lugar = await lugar;
          evento.lugares = _.without(evento.lugares, lugar);
          evento.lugares.push(_lugar);
        }
        return evento;
      })
    );

    // All done.
    return exits.success({ eventos });

  }


};
