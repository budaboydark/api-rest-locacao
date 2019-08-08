module.exports.logar = async (server, req, res) => {
    let dados = req.body
    var connection = server.config.dbConnection()
    var clientesModel = server.app.models.clientes
    const uuid = require('uuid/v4')
    
    await clientesModel.getCliente(dados.email, connection, async (erro, response) => {
        if(erro){
            res.status(500).send(erro)
            return
        }else{
            var hash = await server.app.helpers.hash.verifyHash(response[0].senha, dados.senha)
            if(hash){
                var token = uuid()
                var cliente = {
                    nome: response[0].nome,
                    email: response[0].email,
                    token: token
                }

                var dadosInsert = {
                    idclientes : response[0].idclientes,
                    token : token,
                    logado: true
                }

                var loginModel = server.app.models.login
                await loginModel.getLoginIdclientes(dadosInsert.idclientes, connection, async (erro, clientesLogin) => {
                    if(erro){
                        res.status(500).send(erro)
                    }else{
                        if(clientesLogin.length > 0){
                            cliente.token = clientesLogin[0].token
                            res.send(cliente)
                        }else{
                            await loginModel.insertLogin(dadosInsert, connection, (erro, response) => {
                                if(erro){
                                    res.status(500).send(erro)
                                }else{
                                    res.send(cliente)
                                    return
                                }
                            })
                        }
                    } 
                })
            
            }else{
                res.status(400).send('senha não confere com a cadastrada no sistema')
            }
            
        }
    })

    return
}


module.exports.sair = async (server, req, res) => {
    const {token} = req.params
    var connection = server.config.dbConnection()
    var loginModel = server.app.models.login
    await loginModel.deleteLogin(token, connection, async (erro, response) => {
        if(erro){
            res.status(500).send(erro)
        }else{
            res.send({message:"usuário deslogado"})
            return
        }
    })
    return
}
