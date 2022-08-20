# Actualizando artículos

Crea el controlador `actualizar-comentarios.js`

Es importante dentro de este controlador, especificar las entradas

```Javascript
  inputs: {
    comentarioId: {
      type: 'string'
    },
    contenido: {
      type: 'string'
    }
  },
```

Además actualizar usando las entradas

```Javascript
fn: async function (inputs, exits) {
  await Comentario.update({ id: inputs.comentarioId }, { contenido: inputs.contenido })
  return exits.success('/');
}
```

Luego crea la ruta

```Javascript
'POST /actualizar_comentario/:comentarioId': { action: 'actualizar-comentario' },
```

Para probar puedes utilizar un cliente como CURL para enviar una peticion post
