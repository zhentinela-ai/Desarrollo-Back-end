# Procesando inputs desde el controlador

Para esta tarea debes primero:

1. Configurar tu base de datos
2. Crear tu tabla
3. Crear el modelo `/api/models/Servicio.js`
  
Crea el formulario y la ruta correspondiente

```Javascript
  '/solicitar_servicio': {
    view: 'pages/solicitar_servicio'
  },
```

```HTML
<h1>Solicitar Servicio</h1>

<form action="/procesar_solicitar_servicio" method="POST">
  <p>
    <label for="nombre">Nombre</label>
    <input type="text" name="nombre" required="true">
  </p>

  <p>
    <label for="apellido">Apellido</label>
    <input type="text" name="apellido" required="true">
  </p>

  <p>
    <label for="descripcion">Servicio</label>
    <textarea name="descripcion" required="true"></textarea>
  </p>

  <p>
    <label for="email">Email</label>
    <input type="email" name="email" required="true">
  </p>

  <p>
    <label for="telefono">Teléfono</label>
    <input type="text" name="telefono" required="true">
  </p>

  <p>
    <input type="submit" value="continuar">
  </p>


</form>
```

Luego crea el controlador con la declaracion de inputs y su uso

```Javascript
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
```
