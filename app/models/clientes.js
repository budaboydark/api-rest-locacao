module.exports = () => {
    this.insertClientes = (dados, connection, callback) => {
        connection.query("INSERT INTO clientes SET ?", dados, callback)
    }

    this.getCliente = (email, connection, callback) => {
        connection.query("SELECT * FROM clientes WHERE email = '"+email+"'", callback)
    }

    return this
}