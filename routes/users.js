var express = require("express");
var router = express.Router();

var User = require('../model/user');


router.get('/login', function(req, res){
	res.render('login');
});

router.get('/signup', function(req, res){
	res.render('signup');
});


router.post('/signup', function(req, res){
	//console.log("hi")
	var email = req.body.email;
	var username = req.body.name;
	var password = req.body.psw;

	// Validation
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('psw', 'Password is required').notEmpty();
	req.checkBody('repsw', 'Passwords do not match').equals(req.body.psw);

	var errors = req.validationErrors();
	if(errors){
		res.render('signup',{
			errors:errors
		});
	} else {
		var newUser = new User({
			email:email,
			username: username,
			password: password
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});

module.exports = router;

