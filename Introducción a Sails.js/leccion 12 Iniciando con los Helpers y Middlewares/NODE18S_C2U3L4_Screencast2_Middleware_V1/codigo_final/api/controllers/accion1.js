module.exports = async function(req, res) {
  // return res.send('Hola 2')
  return res.view('pages/accion1', {nombre: "luis"})
}
