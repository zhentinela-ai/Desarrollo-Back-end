```Javascript

// Crear layout

    <nav>
      <a href="#">Cerrar Sesión</a>
    </nav>



    '/': { action: 'view-inicio' , locals: {layout: 'iniciado'} },

    <h1><%=titulo%></h1>

    '/': { action: 'view-inicio' , locals: {layout: 'layouts/iniciado', titulo: 'Inicio'} },

    '/': { action: 'view-inicio' , locals: {titulo: "Inicio"} },
  '/hola': { action: 'view-inicio' , locals: {layout: 'layouts/iniciado', titulo: 'Hola'} },


```
