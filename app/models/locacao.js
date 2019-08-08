module.exports = function() {
    this.insertLocacao = (dados, connection, callback) => {
        connection.query("INSERT INTO locacao SET ?", dados, callback)
    }

    this.deleteLocacao = (idlocacao, connection, callback) => {
        connection.query('DELETE FROM locacao WHERE idlocacao = '+idlocacao, callback)
    }

    this.getLocacao = (dados, connection, callback) => {
        connection.query('SELECT * FROM locacao WHERE idlocacao = '+dados.idlocacao+' AND idclientes = '+dados.idclientes, callback)
    }

    return this
}