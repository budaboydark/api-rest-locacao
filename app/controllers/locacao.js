module.exports.locar = async (server, req, res) => {
    var token = req.headers['x-access-token']
    var connection = server.config.dbConnection()
    var loginModel = server.app.models.login

    await loginModel.getLogin(token, connection, async (erro, response) => {
        if(erro){
            res.status(500).send(erro)
        }else{
            if(response.length > 0){
                var filmesModel = server.app.models.filmes
                await filmesModel.getFilmesID(req.body.codigoFilme, connection, (erro, responseFilme) => {
                    if(erro){
                        res.status(500).send(erro)
                    }else{
                        //TODO criar a locacao para usuário
                        res.send(responseFilme)
                    }
                })
            }else{
                res.status(403).send({message:'não autorizado'})
            }
        }
    })
    return 
}

// TODO criar controller para devolução de filme