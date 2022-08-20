```Javascript

var pool = mysql.createPool({
  connectionLimit: 20,
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'blog'
})


aplicacion.get('/noticias', function (peticion, respuesta) {
})

pool.getConnection(function(err, connection) {
})

const query = `SELECT * FROM noticias WHERE autor = ${connection.escape(peticion.query.autor)}`

connection.query(query, function (error, filas, campos) {
  respuesta.render('index', { noticias: filas })
})

connection.release()

// aplicacion.get('/noticias', function (peticion, respuesta) {
//   pool.getConnection(function(err, connection) {
//     const query = `SELECT * FROM noticias WHERE autor = ${connection.escape(peticion.query.autor)}`
//     connection.query(query, function (error, filas, campos) {
//       respuesta.render('index', { noticias: filas })
//     })
//     connection.release()
//   })
// })

<h2>Noticias</h2>
<ul>
  <% for(let i=0; i<noticias.length; i++) { %>
  <li><%=noticias[i].titulo%></li>
  <% } %>
</ul>

```

