var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/myop');
var ObjectId = require('mongodb').ObjectId; 
// Vote Schema
var VoteSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
	},
	character: {
		type: String,
		index: true,
		unique: true
	},
	timeStamp: {
		type : Date
	}
});


var Vote = module.exports = mongoose.model('vote', VoteSchema);

module.exports.addVote = function(newVote, callback){
	newVote.save(callback);
}