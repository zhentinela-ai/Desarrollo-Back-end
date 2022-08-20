module.exports = {


  friendlyName: 'View login',


  description: 'Display "Login" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/admin',
    }

  },

  fn: async function () {

    // Respond with view.
    return {};

  }


};
