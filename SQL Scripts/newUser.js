var mysql = require('mysql');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Need this in order to get the info from our form
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/newUser.css',function(req, res){
	res.sendFile(__dirname + "/" + "newUser.css");	
});


app.get('/', function (req,res) {
		res.sendFile(path.join(__dirname + '/newUser.html'));
	});


// This code handles the HTML form sent via GET on Submit
// This is getting the number the user inputs in the form
app.post('/process_post', function (req, res) {
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
				res.send("same email");
			}
			else
			{
				//If it doest not exist it adds it to the database here.
				//console.log("not the same");

				con.query("Insert into UserProfiles (`Email_Address` , `Passwords`) Values ('" + name +  "','" + pass + "');", function (err, result) {
					if (err) throw err;
					res.send("1 record inserted");
				});
		
			}
			
		}
	});
})



// This code leaves the web server running
var server = app.listen(8080, function () {
	console.log("Webserver listening at http://localhost:8080") ;
})



