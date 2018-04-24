var express = require('express');
var app = express();
var mysql = require('mysql')
var myConnection = require('express-myconnection')
global.test  = "None";
global.data;

var config = require('./config')
var dbOptions = {
 host: config.database.host,
 user: config.database.user,
 password: config.database.password,
 port: config.database.port,
 database: config.database.db,
}


app.use (myConnection(mysql, dbOptions, 'pool'))

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var index = require('./routes/index')
var Login = require('./routes/Login')
var newUser = require('./routes/newUser')
var ADEN = require('./routes/ADEN')

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
 secret: 'None',
 resave: false,
 saveUninitialized: true,
 cookie: { maxAge: 60000 }
}))



//index page 
app.get('/', function(req, res) {
	req.getConnection(function(error, conn) {
	var sqlQuery = 'select * from UserTags;';
	
	conn.query(sqlQuery, function(err, rows, fields) {
		if (err) throw err		
		data = rows
		res.render('pages/index', {
		test,
		data
   });
})
})
    
});

//Loads up the login page when we click log in
app.get("/Login_Get", function(req, res){
	res.render('pages/LoginForm')
});	

//loads up the newuser page when we click on the new user btton
app.get("/NewUser", function(req, res) {
	res.render('pages/newUser');
})
app.get("/Logout", function(req, res) {
	test = "None"
	res.render('pages/index', {
		test
	});
});

//Updating database tags
app.post('/Model', function (req, res) {
	req.getConnection(function(error, conn) {
		var hall = req.body.HALL
		console.log(hall)
		var Tag = req.body.TAGG
		conn.query("Update UserTags SET Tags = '" + Tag + "' where Email_Address = '" + test +"';");
		conn.query("Update UserTags SET Hall = '" + hall + "' where Email_Address = '" + test +"';");

		var sqlQuery = 'select * from UserTags;';
		conn.query(sqlQuery, function(err, rows, fields) {
			if (err) throw err		
			data = rows
			res.render('pages/index', {
				test,
				data
			});
	})
	
})
})



app.use('/', index)
//Both of these will be going into the partials folder but will be using two diffrent files that have 
//different code for each
app.use('/' , Login )
app.use('/', newUser)
app.use('/', ADEN)

var hostName = config.server.host;
var serverPort = config.server.port;

app.listen(serverPort, function(){
 console.log('Server running at port ' + serverPort + ': http://' + hostName + ': '
+ serverPort)
})
