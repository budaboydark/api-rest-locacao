 var middleware = function(req, res, next) {
     res.status(404).send('página não encontrada')
 }
 module.exports = middleware