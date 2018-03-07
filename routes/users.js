var express = require("express");
var router = express.Router();
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user');
var nodemailer = require('nodemailer');


router.get('/login', function(req, res){
	res.render('login');
});

router.get('/signup', function(req, res){
	res.render('signup');
});

//signup part
router.post('/signup', function(req, res){
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	//console.log(username);
	// Validation
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('repsw', 'Passwords do not match').equals(req.body.password);

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
			//console.log(user);
		});

		req.flash('success_msg', 'You are registered and can now login');

		res.redirect('/users/login');
	}
});


//login part
passport.use(new LocalStrategy(
  function(username, password, done) {
  	User.getUserByUsername(username, function(err, user){
  		if(err) throw err;
  		if(!user){
  			return done(null, false, {message: 'Unknow User'});
  		}
  		User.comparePassword(password, user.password, function(err, isMatch){
  			if(err) throw  err;
  			if(isMatch){
  				return done(null, user);
  			}else{
  				return done(null, false, {message: 'Invalid password'});
  			}
  		});
  		//console.log(user);
  	});
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login',
passport.authenticate('local', {failureRedirect:'/users/login',failureFlash:true}),
	function(req, res){
		//console.log(req.user);
		res.redirect('/');
	});

router.post('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/');
});


//verify mail 

// create reusable transporter object using the default SMTP transport
let smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'shunkaiz1997@gmail.com', // generated ethereal user
        pass: 'asdfg112' // generated ethereal password
    }
});






router.get('/email', function(req, res){
	var mailAddress = req.query.email;
	console.log(mailAddress);
	// setup email data with unicode symbols
	let mailOptions = {
	    from: '"Fred Foo 👻" <shunkaiz1997@gmail.com>', // sender address
	    to: mailAddress, // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world?', // plain text body
	    html: '<b>Hello world?</b>' // html body
	};	
	smtpTransport.sendMail(mailOptions, function(error, info){
	    if (error) {
	        return console.log(error);
	    }
	    console.log('Message sent: %s', info.messageId);
	    // Preview only available when sending through an Ethereal account
	    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	    res.end('{"success" : "Updated Successfully", "status" : 200}');
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou... 
	});
	
});

module.exports = router;

