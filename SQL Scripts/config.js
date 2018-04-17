var config = {
	database: {
		host: 'localhost', // database host
		user: 'root', // your database username
		password: 'Morenju1363', // your database password
		port: 3306, // default MySQL port
		db: 'ProjectDB' // your database name
	},
	
	server: {
		host: '127.0.0.1',
		port: '8000'
	}
}
module.exports = config //Expose the current config as a module