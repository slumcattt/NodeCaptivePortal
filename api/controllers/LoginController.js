/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	 index: function (req, res) {
    return res.render('login', {name: 'Midhun'});
  }
};

