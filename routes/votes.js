var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
	if(!res.locals.user){
		res.send('You need to log in first');
	}
	
	res.send('vote success');
	console.log("index " + res.locals.user);
});

module.exports = router;
