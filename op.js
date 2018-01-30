var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');





var app = express();


app.set('views',  path.join(__dirname, 'views'));

app.engine('handlebars', exphbs({defaultLayout:'layout'}));

//set up static folder
app.use(express.static(path.join(__dirname, 'public')));


app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('port'+ app.get('port')+'is established');
});