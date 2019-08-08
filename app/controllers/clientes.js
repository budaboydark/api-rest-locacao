module.exports.cadastro = async (server, req, res) => {
    
    var clientesModel = server.app.models.clientes
    var connection = server.config.dbConnection()
    var dados = req.body
    dados.senha = await server.app.helpers.hash.getHash(dados.senha)

    await clientesModel.insertClientes(dados, connection, (erro, response) => {
        if(erro){
            res.send(erro)
        }else{
            res.send({message: "usuário cadastrado"})
        }
    })
}
