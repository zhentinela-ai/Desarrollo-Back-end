/* eslint-disable linebreak-style */
module.exports = function() {
  var req = this.req;
  var res = this.res;

  console.log(req);
  res.send('hola');
};
