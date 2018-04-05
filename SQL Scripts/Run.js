var mysql = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//website css
app.get('/style.css',function(req, res){
	res.sendFile(__dirname + "/" + "style.css");	
	});



//website layout 
app.get('/', function (req,res) {
		res.sendFile(path.join(__dirname + '/Website.html'));
	});



//newuser form css
app.get('/newUser.css',function(req, res){
	res.sendFile(__dirname + "/" + "newUser.css");
	});
	
	
	
//NewUser website
app.get("/NewUser", function(req, res) {
	res.sendFile(path.join(__dirname + '/newUser.html'));
	});
	
	

//Login Form css
app.get('/LoginForm.css',function(req, res){
	res.sendFile(__dirname + "/" +"LoginForm.css");
	});


//Login website
app.get("/Login_Get", function(req, res){
	res.sendFile(path.join(__dirname + '/LoginForm.html'));
	});
	
	
	
	
	
	
	
	
	
app.post('/newUser_Post', function(req, res) {
	 name = req.body.uname;
	 pass = req.body.psw;
	 
	 
	// This code sets up DB connection variables
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Morenju1363",
		database: "ProjectDB"
	});

	// This code connects to the database
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected to the ProjectDB database!");
	});
		



	
	//Checking to see if the email already exists. 
	con.query("Select Email_Address From UserProfiles Where Email_Address ='" + name + "';", function(err, row) {
		if (err) throw err;
		else
		{
			if(row && row.length )
			{
				console.log("same email");
				return res.redirect('/');
				//res.send("same email");
			}
			else
			{
				//If it doest not exist it adds it to the database here.
				//console.log("not the same");

				con.query("Insert into UserProfiles (`Email_Address` , `Passwords`) Values ('" + name +  "','" + pass + "');", function (err, result) {
					if (err) throw err;
					console.log("1 record inserted");
					res.redirect('/');
					//res.send("1 record inserted");
					
				});
		
			}
			
		}
	});
})


app.post('/login_Post',function(req, res){
	var name = req.body.uname;
	var pass = req.body.psw;
	
	// This code sets up DB connection variables
	var con = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "Morenju1363",
		database: "ProjectDB"
	});

	// This code connects to the database
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected to the ProjectDB database!");
	});
		



	
	//Checking to see if the email already exists. 
	con.query("Select Email_Address From UserProfiles Where Email_Address ='" + name + "';", function(err, row) {
		if (err) throw err;
		else
		{
			if(row && row.length )
			{
				//I want to return the username back to the original html form here. this just means it exists
				console.log("Email Found");
				res.redirect('/');
			}
			else
			{
				//return an error which states "user not found"
				console.log("User not found");
				res.redirect('/');

		
			}
			
		}
	});
})


// This code leaves the web server running
var server = app.listen(8080, function () {
	console.log("Webserver listening at http://localhost:8080") ;
})
