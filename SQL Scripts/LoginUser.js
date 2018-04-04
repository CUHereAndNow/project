var mysql = require('mysql');
var express = require('express')
var app = express();
var path = require('path');

app.get('/LoginForm.css',function(req, res){
	res.sendFile(__dirname + "/" + "LoginForm.css");	
});


app.get('/', function (req,res) {
		res.sendFile(path.join(__dirname + '/LoginForm.html'));
	});


// This code handles the HTML form sent via GET on Submit
// This is getting the number the user inputs in the form
app.get('/process_get', function (req, res) {
	var name = req.query.uname;
	var pass = req.query.psw;
	
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
				con.end();
			}
			else
			{
				//return an error which states "user not found"
				console.log("User not found");

		
			}
			
		}
	});
})



// This code leaves the web server running
var server = app.listen(8080, function () {
	console.log("Webserver listening at http://localhost:8080") ;
})



