```Javascript

<header>
  <img src="images/logo.png"/>
</header>

<%- partial('../partials/cabecera') %>

<footer>
  Derechos reservados
</footer>

<%- partial('../partials/pie') %>

<p>Articulos disponibles</p>
<table>
  <thead>
    <tr>
      <th>id</th>
      <th>Marca</th>
      <th>Modelo</th>
      <th>Descripción</th>
      <th>Precio</th>
      <th>Usuario</th>
      <th>Comentarios</th>
    </tr>
  </thead>
  <tbody>
    <% articulos.forEach(articulo=> { %>
      <tr>
        <td><%=articulo.id%></td>
        <td><%=articulo.marca%></td>
        <td><%=articulo.modelo%></td>
        <td><%=articulo.descripcion%></td>
        <td><%=articulo.precio%></td>
        <td><%=articulo.usuario.nombre%></td>
        <td>
          <ul>
            <% articulo.comentarios.forEach( comentario => { %>
              <li><%=comentario.descripcion%></li>
            <% }) %>
          </ul>
        </td>
      </tr>
    <% }) %>
  </tbody>
</table>


<%- partial('../partials/tabla_principal') %>


<p><%=titulo_tabla%></p>

'/': { action: 'view-inicio' , locals: {titulo: "Inicio", titulo_tabla: "Artículos"} },

<%- partial('../partials/tabla_principal', {titulo_tabla: "Articulos disponibles 2"}) %>

```
