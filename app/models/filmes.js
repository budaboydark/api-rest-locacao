module.exports = () => {
    this.getAllFilmes = (connection,callback) => {
        connection.query("SELECT fc.idfilmes_copias AS codigo,f.titulo,f.diretor FROM filmes_copias AS fc INNER JOIN filmes AS f ON(f.idfilmes = fc.idfilmes) WHERE fc.idfilmes_copias NOT IN (SELECT idfilmes_copias FROM locacao) ORDER BY f.titulo",callback)
    }

    this.getSearchFilmes = (busca, connection, callback) => {
        connection.query("SELECT fc.idfilmes_copias AS codigo,f.titulo,f.diretor FROM filmes_copias AS fc INNER JOIN filmes AS f ON(f.idfilmes = fc.idfilmes) WHERE f.titulo LIKE '%"+busca+"%' AND fc.idfilmes_copias NOT IN(SELECT idfilmes_copias FROM locacao) LIMIT 1",callback)
    }

    this.getFilmesID = (id, connection, callback) => {
        connection.query("SELECT fc.idfilmes_copias AS codigo,f.titulo,f.diretor FROM filmes_copias AS fc INNER JOIN filmes AS f ON(f.idfilmes = fc.idfilmes) WHERE fc.idfilmes_copias = "+id+" AND fc.idfilmes_copias NOT IN (SELECT idfilmes_copias FROM locacao WHERE idfilmes_copias = "+id+") ", callback)
    }

    return this
}