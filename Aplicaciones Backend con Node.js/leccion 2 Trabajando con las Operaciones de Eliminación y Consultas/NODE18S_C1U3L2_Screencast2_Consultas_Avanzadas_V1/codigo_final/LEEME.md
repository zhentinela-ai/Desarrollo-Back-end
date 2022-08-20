```Javascript

 SELECT * FROM tareas;

 SELECT * FROM recursos;


      <br/>
      Recursos:
      <ol>
        <li>a</li>
        <li>b</li>
      </ol>


      <br/>
      Recursos:
      <ol>
        <% for(let j=0; j<tareas[i].recursos.length; j++) { %>
          <li><%=tareas[i].recursos[j]%></li>
        <% } %>
      </ol>

const query = `SELECT 
                  tareas.id AS id, 
                  tareas.descripcion, 
                  recursos.nombre 
               FROM tareas 
               INNER JOIN recursos 
                  ON tareas.id = recursos.tarea_id 
               ORDER BY tareas.id`


SELECT tareas.id AS id, tareas.descripcion, recursos.nombre FROM tareas INNER JOIN recursos ON tareas.id = recursos.tarea_id ORDER BY tareas.id;


    connection.query(query, function (error, filas, campos) {
      let tareas = []
      
      respuesta.render('index', {tareas: tareas})

    })
    connection.release()



      let tareaActual = {
        id: undefined
      }

      for (let i = 0; i < filas.length; i++) {
        if (tareaActual.id != filas[i].id){
          tareaActual = {
            id: filas[i].id,
            descripcion: filas[i].descripcion,
            recursos: [ filas[i].nombre ]
          }
          tareas.push(tareaActual)
        }
        else{
          tareaActual.recursos.push(filas[i].nombre)
        }
      }



 
```



