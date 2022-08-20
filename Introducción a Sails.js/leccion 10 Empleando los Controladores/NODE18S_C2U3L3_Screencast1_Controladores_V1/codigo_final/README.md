```Javascript

module.exports = async function(req, res) {
  return res.send('Hola')
}

return res.view('pages/accion1')

<h1>Accion 1</h1>
<p>Hola</p>

return res.view('pages/accion1', {nombre: "luis"})

<h1>Accion 1</h1>
<p>Hola: <%=nombre%></p>

'/accion1': { action: 'accion1' },

module.exports = {
  accionUno: function(req, res){
    return res.send('Uno')
  },

  accionDos: function(req, res){
    return res.send('Dos')
  }

}

'/accionUno': 'EjemploController.accionUno',
'/accionDos': 'EjemploController.accionDos',

<h1>Accion Dos</h1>

return res.view('pages/accion_dos')

```
