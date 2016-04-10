var $ = require('jquery')
var getRequest = require('./getRequest.js')
var handlebars = require('handlebars')

module.exports = function () {
  getRequest('http://localhost:3000/peanutButter', appendToList)

  function appendToList (data) {
    $('#table').text('')
    var theTemplateScript = $('#pb-template').html()
    // Compile the template
    var theTemplate = handlebars.compile(theTemplateScript)
    $('#table').append(theTemplate(data))
  }
}
