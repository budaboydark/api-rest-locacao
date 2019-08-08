var app = require('./config/server');
var middleware = require('./config/middleware');
app.use(middleware)

app.listen(3010, function() {
	console.log('Servidor ON')
})
