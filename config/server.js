var express = require('express')
var app = express()
var consign = require('consign')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

consign()
    .include('./app/routes')	
    .then('./config/dbConnection.js')
    .then('./app/controllers')
    .then('./app/models')
    .then('./app/helpers')
    .into(app)

module.exports = app
