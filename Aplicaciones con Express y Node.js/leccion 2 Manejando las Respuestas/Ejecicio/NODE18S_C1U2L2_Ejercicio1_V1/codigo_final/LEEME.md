# Plantilla de la tienda

En esta oportunidad instalaremos el motor de plantillas `ejs`

```
npm install ejs --save
```

Enlazamos ese motor con

```Javascript
aplicacion.set('view engine', 'ejs')
```

Creamos el objeto de datos y se lo pasamos a la vista

```Javascript
const datos = {
  nombre: "ZSE",
  direccion: "Calle 3 con Avenida 3. Edificio AURA. Local 1",
  telefonos: ["123-123123", "124-124124"]
}
respuesta.render('index', {datos: datos});
```

Finalmente usamos los datos para generar la interfaz.

```HTML
<h1>Tienda</h1>
  <p>
    <strong>Nombre: </strong> <%=datos.nombre%>
  </p>
  <p>
    <strong>Dirección: </strong> <%=datos.direccion%>
  </p>
  <p>
    <strong>Teléfonos: </strong>
    <ul>
      <% for(let i=0;i<datos.telefonos.length;i++) { %>
        <li><%=datos.telefonos[i]%></li>
      <% } %>
    </ul>
  </p>
```
