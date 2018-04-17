var express = require('express');
var app = express();
var mysql = require('mysql')
var myConnection = require('express-myconnection')

var config = require('./config')
var dbOptions = {
 host: config.database.host,
 user: config.database.user,
 password: config.database.password,
 port: config.database.port,
 database: config.database.db
}


app.use (myConnection(mysql, dbOptions, 'pool'))

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var Login = require('/routes/Login')
var newUser = require('/routes/Login')

var expressValidator = require('express-validator')
app.use(expressValidator())


var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var methodOverride = require('method-override')


app.use(methodOverride(function (req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
 // look in urlencoded POST bodies and delete it
 var method = req.body._method
 delete req.body._method
 return method
 }
}))


var flash = require('express-flash')
var cookieParser = require('cookie-parser');
var session = require('express-session');


app.use(cookieParser('csci3308'))
app.use(session({
 secret: 'csci3308',
 resave: false,
 saveUninitialized: true,
 cookie: { maxAge: 60000 }
}))


//index page 
app.get('/', function(req, res) {

	   res.render('pages/index')
    
});

app.get("/Login_Get", function(req, res){
	res.render('pages/LoginForm');
	});	


app.get("/NewUser", function(req, res) {
	res.render('pages/newUser');
})

app.listen(8000);
console.log('8000 is thre magic port');
