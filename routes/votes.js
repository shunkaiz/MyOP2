var express = require('express');
var router = express.Router();
var Vote = require('../model/vote');
router.get('/', function(req, res){
	if(!res.locals.user){
		res.send('You need to log in first');
	}else{
		var username = res.locals.user.username;
		var charName = req.query.characterName;
		console.log(charName);
		var newVote = new Vote({
			username : username,
			character : charName,
			timeStamp : new Date()
		})
		Vote.addVote(newVote, function(err, vote){
			if(err){
				req.flash('error_msg', 'You have alrady voted');	
				res.send('You can only vote once');	
			}else{
				req.flash('success_msg', 'You have successfully voted');
				res.send('You have successfully voted');	
			}
		});
	}
	

});

module.exports = router;
