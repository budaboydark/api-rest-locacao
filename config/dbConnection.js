require('dotenv').config();

var mysql = require('mysql');

const env = (process.env.APP_ENV).toUpperCase();
var params = {
	dev : {
		host : process.env.DBHOST_DEV,
		user : process.env.DBUSER_DEV,
		password : process.env.DBPASS_DEV,
		database : process.env.DBDATABASE_DEV,
		port : process.env.DBPORT_DEV,

	},
	local : { 
		host : process.env.DBHOST_LOCAL,
		user : process.env.DBUSER_LOCAL,
		password : process.env.DBPASS_LOCAL,
		database : process.env.DBDATABASE_LOCAL,
		port : process.env.DBPORT_LOCAL,
	}
}
var conn = params.local;
	if(env == 'DEV'){
		console.log('DEV')
		conn = params.dev;
	}
var connMysql = mysql.createConnection(conn)

	connMysql.connect(function(err){
		if(err){
			console.log('falha na conexao com DB'+err.stack)
			return
		}
		console.log('conectado com sucesso')
	})
var connect = function(){
	return connMysql
}
module.exports = function() {
    return connect
}
