var app = require('./config/server');
var middleware = require('./config/middleware');
app.use(middleware)

app.listen(3020, function() {
	console.log('PORT 3020')
	console.log('Servidor ON')
})
