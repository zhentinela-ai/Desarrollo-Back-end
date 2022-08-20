/**
 * SesionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async function (req, res) {
    // sails.log.debug(req.body);
    const { username, password } = req.body;
    const admin = await Administradores.find({ usuario: username, password: password });
    if (admin.length !== 0) {
      var oldDateObj = new Date();
      var newDateObj = new Date(oldDateObj.getTime() + 60000);
      res.cookie('admin', req.body, { maxAge: newDateObj, path: '/admin/principal', secure: true });
      // req.session.userId = username;
      // console.log(req.session.userId);
      sails.log.debug('Session Controller:', req.cookies);
      return res.redirect('/admin/principal');
    } else {
      // res.send({ message: 'Usuario o contraseña incorreta' });
      return res.redirect('/admin');
    }
  },

  logout: function (req, res) {
    console.log(req.cookies);
    return res.redirect('/admin');
  }

};

