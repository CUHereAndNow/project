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
			var pass = req.body.psw;
			conn.query("Select Passwords From UserProfiles Where Email_Address ='" + name + "';", function(err , row, result) {
				if (err) throw err;
				else
				{
					console.log ("Tseadas");
					console.log(result);
					console.log(row);
					console.log(row[1]);
					console.log(row[2]);
					console.log(row[3]);
				}
			});
			//console.log(te);
			//console.log(te.Passwords);
			//console.log("adsadfsdaf");
			conn.query("Select Email_Address From UserProfiles Where Email_Address ='" + name + "';", function(err, row) {
			if (err) throw err;
			else
			{
				if(row && row.length )
				{
					//I want to return the username back to the original html form here. this just means it exists
					console.log("Email Found");
					console.log(test)
					test = name;
					console.log("User is");
					console.log(test)
					res.render('pages/index', {
						test
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
		});
	});
});
			
					
					
					
					/*
					var test = conn.query("Select Decode(Passwords, 'SecretPhase') as Passwords from UserProfiles where Email_Address = '" + name + "' ;")
					if ( test===pass)
					{
						res.render('pages/index', {
						test: name
						});
					}
					else
					{
						console.log('Wrong');
						console.log (pass);
						console.log(test);
						res.render('pages/index',	{
						test: "None"
						});
						
					}
							
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
});
*/
module.exports = app // This must be the last line in the file. Any and all code
//must be added before this line
