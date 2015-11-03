var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var mongoose = require('mongoose');

var app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
{
    extended:false
}));

app.use(express.static('public'));
//mongoose
mongoose.connect('mongodb://localhost:27017/travel2');
mongoose.connection.on('error',function(){
    console.error('MongoDb is not connected. Check if Mongod is running.');
});


var userController = require('./controllers/users');

app.get('/',function(req,res){// loads the main-page i.e. 1st page
	res.render('index');
});

app.post('/signup',userController.postNewUser);// for signup action
app.post('/login',userController.getUserByUser);// for login action

app.listen(3000);