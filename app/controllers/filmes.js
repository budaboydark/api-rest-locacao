module.exports.index = async (server, req, res) => {
    
    var filmesModel = server.app.models.filmes
    var connection = server.config.dbConnection()

    await filmesModel.getAllFilmes(connection,(erro, response) => {
        if(erro){
            res.send(erro)
        }else{
            res.send({filmes:response})
        }
    })
}

module.exports.busca = async (server, req, res) => {
    
    const { busca } = req.query

    var filmesModel = server.app.models.filmes
    var connection = server.config.dbConnection()

    await filmesModel.getSearchFilmes(busca,connection,(erro, response) => {
        if(erro){
            res.status(500).send(erro)
        }else{
            res.status(200).send({filmes:response})
        }
    })

}

module.exports.id = async (server, req, res) => {
    
    const { id } = req.params

    var filmesModel = server.app.models.filmes
    var connection = server.config.dbConnection()

    await filmesModel.getFilmesID(id,connection,(erro, response) => {
        if(erro){
            res.status(500).send(erro)
        }else{
            res.status(200).send({filmes:response})
        }
    })
}