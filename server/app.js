var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


// app.use(cookieParser());


app.use(session({
	secret: 'tongiscool'
}));

// app.use(function(req, res, next) {
// 	console.log(req.session);
// 	next();
// });




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./routes/index.js'));

app.get('/', function(req, res, next) {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.use(express.static('browser'));
app.use(express.static('node_modules'));

app.listen(3000, function() {
	console.log('listneing on port 3000...');
});