/* eslint-disable linebreak-style */
module.exports = async function (req, res, proceed) {
  // console.log('is Logged In', req.session.userId);
  // if (req.cookies) {
  //   return proceed();
  // }
  // if (req.session.userId) {
    return proceed();
  // }

  return res.forbidden();
};
