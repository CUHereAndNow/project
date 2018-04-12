var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

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
