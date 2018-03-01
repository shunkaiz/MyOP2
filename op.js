var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
global.Tether = require('tether');

var index = require('./routes/index.js');
var users = require('./routes/users.js');



var app = express();



app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('views',  path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//set up static folder
app.use(express.static(path.join(__dirname, 'public')));

//set up the port
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function(){
	console.log('port'+ app.get('port')+'is established');
});


app.use('/', index);
app.use('/users', users);