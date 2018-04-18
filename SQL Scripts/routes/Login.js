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
			
			/*
			conn.query("Select Decode(Passwords, 'SecretPhase') as Passwords from UserProfiles where Email_Address = '" + name + "' ;", function (err, results, fields) {
				if (err) throw err;
				else
				{
					var c = fields.toString();
					if (c == pass)
					{
						console.log("test")
					}
					else
					{
						console.log("fail")
					}
					console.log(c);
				}
			});
		})
	*/
			
			
			
			
			
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
