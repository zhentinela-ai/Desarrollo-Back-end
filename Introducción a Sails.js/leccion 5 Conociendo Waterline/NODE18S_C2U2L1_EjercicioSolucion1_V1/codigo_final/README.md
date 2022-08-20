# Mostrando los cerrajeros

En el controlador debes consultar los cerrajeros y pasarlos a la vista.

```Javascript
  fn: async function (inputs, exits) {
    const  cerrajeros = await Cerrajero.find()
    return exits.success({cerrajeros});
  }
```

Luego en la vista crear la tabla

```HTML
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Teléfono</th>
      <th>Zona</th>
      <th>Horario</th>
      <th>Disponible</th>
    </tr>
  </thead>
  <tbody>
    <% cerrajeros.forEach(cerrajero=> { %>
      <tr>
        <td><%=cerrajero.nombre%></td>
        <td><%=cerrajero.telefono%></td>
        <td><%=cerrajero.zona%></td>
        <td><%=cerrajero.horario%></td>
        <td><%=cerrajero.disponible? "Si" : "No"%></td>
      </tr>
    <% }) %>
  </tbody>
</table>
```
