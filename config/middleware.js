 var middleware = function(req, res, next) {
     res.status(404)
     res.render('not-found')
 }
 module.exports = middleware