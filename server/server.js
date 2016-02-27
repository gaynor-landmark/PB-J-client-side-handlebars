// this is where the express server is created
var express = require('express')
var path = require('path')    // used for joining paths
var fs = require('fs')    // used for file operations

var server = express()      // create the server

server.use(express.static(path.join(__dirname, "../public")))     // the static files will be served from this directory

// REST

// GET
// setup the route for the peanutButter
server.get('/peanutButter', function (req, res) {
  var fullPath = (__dirname + '/../db/db.json')   //fs needs a full path
  console.log(fullPath)
  fs.readFile(fullPath, 'utf8', function(err, data) {
    if (err) {
      console.log(err, 'err')
    }
    else {
      var fileJson = JSON.parse(data)
      console.log(fileJson)
      res.json(fileJson.peanutButter)
    }
  })

})



module.exports = server
