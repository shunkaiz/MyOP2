var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/myop');
var ObjectId = require('mongodb').ObjectId; 
// Vote Schema
var VoteSchema = mongoose.Schema({
	username: {
		type: String,
		index:true,
		unique:true,
		sparse:true
	},
	character: {
		type: String,
		index: true,
		unique: true
	},
	timeStamp: {
		type : String
	}
});


var Vote = module.exports = mongoose.model('vote', VoteSchema);

mongoose.exports.createVote = function(newVote, callback){

}