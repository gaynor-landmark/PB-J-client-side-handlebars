// this is where the express server is created
var express = require('express')
var path = require('path')    // used for joining paths

var server = express()      // create the server

server.use(express.static(path.join(__dirname, "../public")))     // the static files will be served from this directory

module.exports = server
