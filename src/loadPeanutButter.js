var $ = require('jquery')
var getRequest = require('./getRequest.js')

module.exports = function() {
  getRequest('http://localhost:3000/peanutButter', appendToList)

  function appendToList(data){

    $('#table').text('')
    $('#table').append('<table><tr><th>Make</th><th>Description</th></tr>')
    data.forEach( (item) => {
       $('#table').append('<tr><td>' + item.make + '</td><td>' + item.description + '</td></tr>')
    })
    $('#table').append('</table')
    
  }

}
