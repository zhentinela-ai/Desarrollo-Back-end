# Usando locals

Para esta oportunidad crearemos tres vistas:

```
views/pages
├── contacto.ejs
├── mision.ejs
└── vision.ejs
```

y Usaremos las rutas para enviar variables con `locals`

```Javascript
  '/contacto': {
    view: 'pages/contacto',
    locals: {
      titulo: "Contáctenos",
      telefonos: "123-123123",
      direccion: "Avenida 1 con Calle 2"
    }
  },

  '/mision': {
    view: 'pages/mision',
    locals: {
      titulo: "Misión",
      mision: "Nuestra misión es ayudar con tecnología a la comunidad..."
    }
  },

  '/vision': {
    view: 'pages/vision',
    locals: {
      titulo: "Visión",
      vision: "Nuestra visión dar el mejor servicio a nuestros clientes..."
    }
  },
```

Estas variables serán usadas en nuestras vistas


```EJS
<h1><%=titulo%></h1>

<p>Estamos disponibles en:</p>

<p>Teléfonos: <%=telefonos%></p>

<p>Dirección: <%=direccion%></p>
...
```

Y así mismo con las vistas de `mision.ejs` y `vision.ejs`

