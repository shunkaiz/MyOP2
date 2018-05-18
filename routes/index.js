var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.render('index');
});


module.exports = router;

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}
