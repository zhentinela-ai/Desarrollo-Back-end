```Javascript

<th>id</th>

<td><%=articulo.id%></td>




module.exports = {


  friendlyName: 'Editar',


  description: 'Editar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {


    return exits.success("/");

  }


};


'/editar': { action: 'editar' },



let articulo = await Articulo.update({id: 9}, {descripcion: "Perfecto estado"})





module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {

    return exits.success("/");

  }


};

let articulo = await Articulo.destroy({id: 3})


'/eliminar': { action: 'eliminar' },

```
