var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var db = mongoose.connect('mongodb://localhost/myop');
var ObjectId = require('mongodb').ObjectId; 
// User Schema
var UserSchema = mongoose.Schema({
	username: {
		type: String,
		index:true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	tempHashLink: {
		type : String
	},
	active:{
		type: Boolean
	}
});


var User = module.exports = mongoose.model('user', UserSchema);

module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
	//console.log(username);
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}

module.exports.setTempHashLink = function(newUser, callback){
	//encript the hash link with user's password which is generated with bcript
	bcrypt.hash(newUser.password, 10, function(err, hash) {  		
  		var username = newUser.username;
  		var query = {username: username};
  		User.findOneAndUpdate(query, { tempHashLink: hash},{new: true, upsert:true}, function(err, user){
  			//console.log(user.tempHashLink);
  			callback(err, hash)
  		});
  		// User.findOne(query, function(err, user){
  		// 	console.log('after update' + user.tempHashLink);
  		// });
  		
	});
}

module.exports.checkHashLink = function(hash, callback){
	console.log(hash);
	var query = {tempHashLink: hash};
	User.findOne(query, function(err, user){
		if(err) throw err;
		else if(!user) return;
		console.log('find user' + user.username);
		User.activateUser(user, callback);
	});
}

module.exports.activateUser = function(user, callback){
	var username = user.username;
	var query = {username, username};
	var activeQuery = {$set : {active : true}};
	var deleteQuery = {$unset : {tempHashLink : ''}};
	User.findOneAndUpdate(query, activeQuery, function(err, user){
		if(err) throw err;
		User.findOneAndUpdate(query, deleteQuery, function(err, user){
			if(err) throw  err;
			callback(err, user);
		}
	});
}