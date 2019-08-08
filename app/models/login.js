module.exports = function () {

    this.getLogin = (token, connection, callback) => {
        connection.query("SELECT * FROM clientes_login WHERE token = '"+token+"'", callback)
    }

    this.getLoginIdclientes = (id, connection, callback) => {
        connection.query("SELECT * FROM clientes_login WHERE idclientes = "+id, callback)
    }

    this.insertLogin = (dados, connection, callback) => {
        connection.query("INSERT INTO clientes_login SET ?", dados, callback)
    }

    this.deleteLogin = (token, connection, callback) => {
        connection.query("DELETE FROM clientes_login WHERE token = '"+token+"'", callback)
    }

    return this
}