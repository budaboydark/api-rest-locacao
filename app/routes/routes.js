module.exports = (server) => {
    server.get('/filmes',(req,res,next) => {
        if(req.query.busca){
            server.app.controllers.filmes.busca(server, req, res)    
        }else{
            server.app.controllers.filmes.index(server, req, res)
        }
        return
    })

    server.get('/filmes/:id',(req,res,next) => {
        server.app.controllers.filmes.id(server, req, res)
        return
    })

    server.post('/clientes', (req, res, next) => {
        server.app.controllers.clientes.cadastro(server, req, res)
        return
    })

    server.post('/login', (req, res, next) => {
        server.app.controllers.login.logar(server, req, res)
        return
    })

    server.delete('/login/:token', (req, res, next) => {
        server.app.controllers.login.sair(server, req, res)
        return
    })

    server.post('/locacao', (req, res, next) => {
        server.app.controllers.locacao.locar(server, req, res)
        return
    })

    server.delete('/locacao', (req, res, next) => {
        server.app.controllers.locacao.devolver(server, req, res)
        return
    })

}