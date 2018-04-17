var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/login_Post', function(req, res) 
	{
		req.getConnection(function(error, conn) 
		{
			var name = req.body.uname;
			//console.log(name)
			var pass = req.body.psw;
			conn.query("Select Email_Address From UserProfiles Where Email_Address ='" + name + "';", function(err, row) {
			if (err) throw err;
			else
			{
				if(row && row.length )
				{
					//I want to return the username back to the original html form here. this just means it exists
					console.log("Email Found");
					res.render('pages/index', {
						test: name
					});
				}
				else
				{
					//return an error which states "user not found"
					console.log("User not found");
					res.render('pages/index',	{
						test: "None"
						});

		
				}
		
			}
		})
	})
})
module.exports = app // This must be the last line in the file. Any and all code
//must be added before this line
