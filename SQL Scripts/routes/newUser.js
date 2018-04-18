var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


	
app.post('/newUser_Post', function(req, res) {
	
	req.getConnection(function(error, conn) 
	{
		var name = req.body.uname;
		var pass = req.body.psw;
		
		//var hashed_password = hash('sha512', $_POST[pass]);
		//console.log(hashed_password)
		
		//Checking to see if the email already exists. 
		conn.query("Select Email_Address From UserProfiles Where Email_Address ='" + name + "';", function(err, row) {
		if (err) throw err;
		else
		{
			if(row && row.length )
			{
				console.log("same email");
				 res.redirect('/');
				//res.send("same email");
			}
			else
			{
				//If it doest not exist it adds it to the database here.
				//console.log("not the same");
				conn.query("Insert into UserProfiles (`Email_Address` , `Passwords`) Values ('" + name +  "','" + pass + "');", function (err, result) {
				if (err) throw err;
				console.log("1 record inserted");
				conn.query("Insert Into UserTags (Email_Address) Select Email_Address from UserProfiles where Email_Address = '" + name + "';");
				res.redirect('/');
				//res.send("1 record inserted");
					
					});
				}	
			}
		});
	})

})


module.exports = app // This must be the last line in the file. Any and all code
//must be added before this line
