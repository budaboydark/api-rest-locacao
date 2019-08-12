var mysql = require('mysql');
var params = {
	host : 'localhost',
	user : 'root',
	password : 'root',
	database : 'locadora',
	port : '3306',
}
var connMysql = mysql.createConnection(params)

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
