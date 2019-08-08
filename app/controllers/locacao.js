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
                await filmesModel.getFilmesID(req.body.codigoFilme, connection, async (erro, responseFilme) => {
                    if(erro){
                        res.status(500).send(erro)
                    }else{
                        if(responseFilme.length > 0){
                            var dados = {
                                idclientes: response[0].idclientes,
                                idfilmes_copias: req.body.codigoFilme
                            }
                            var locacaoModel = server.app.models.locacao
                            await locacaoModel.insertLocacao(dados, connection, (erro, responseLocacao) => {
                                if(erro){
                                    res.status(500).send(erro)
                                }else{
                                    res.send({message:"filme locado com sucesso"})
                                }
                            })
                        }else{
                            res.send({message:"filme não está disponível para locacao"})
                        }
                    }
                })
            }else{
                res.status(403).send({message:'não autorizado'})
            }
        }
    })
    return 
}

module.exports.devolver = async (server, req, res) => {
    var token = req.headers['x-access-token']
    var connection = server.config.dbConnection()
    var loginModel = server.app.models.login

    await loginModel.getLogin(token, connection, async (erro, response) => {
        if(erro){
            res.status(500).send(erro)
        }else{
            if(response.length > 0){
                var locacaoModel = server.app.models.locacao
                var dados = {
                    idclientes: response[0].idclientes,
                    idlocacao: req.body.codigoLocacao
                }
                await locacaoModel.getLocacao(dados, connection, async (erro, responseLocacao) => {
                    if(erro){
                        res.status(500).send(erro)
                    }else{
                        if(responseLocacao.length > 0){
                            await locacaoModel.deleteLocacao(dados.idlocacao, connection, (erro, responseLocacao) => {
                                if(erro){
                                    res.status(500).send(erro)
                                }else{
                                    res.send({message:"Título entregue com sucesso"})
                                }
                            })
                        }else{
                            res.send({message:"locacao não encontrado"})
                        }
                    }
                })
            }else{
                res.status(403).send({message:'não autorizado'})
            }
        }
    })
    return 
}
