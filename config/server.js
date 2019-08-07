var express = require('express')
var app = express()
var consign = require('consign')
var expressLayouts = require('express-ejs-layouts')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

app.set('view engine', 'ejs')
app.set('views', './app/views')
app.set('layouts','./app/views/index')

app.use(expressLayouts)
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(expressValidator())
app.use(express.static('skins/template1'))

consign()
    .include('./app/routes')	
    .then('./config/dbConnection.js')
    .then('./app/controllers')
    .then('./app/models')
    .into(app)

module.exports = app
