var app = require('./config/server');
var middleware = require('./config/middleware');
// ESTÁ SENDO UTILIZADO O MODULO CONSIG EM SERVER.JS POR ISTO FOI COMENTADO AS ROTAS ABAIXO
// var rotaNoticias = require('./app/routes/noticias')(app)
// var rotaHome = require('./app/routes/home')(app)
// var rotaContas = require('./app/routes/contas')(app)
// var rotaForm = require('./app/routes/formulario_inclusao_noticia')(app)
// var rotaPlanilhas = require('./app/routes/planilhas')(app)
app.use(middleware)
app.listen(3020, function() {
	console.log('PORT 3020')
	console.log('Servidor ON')
})
