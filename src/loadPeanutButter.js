var $ = require('jquery')
var getRequest = require('./getRequest.js')
var handlebars = require('handlebars')

module.exports = function() {
  getRequest('http://localhost:3000/peanutButter', appendToList)

  function appendToList(data){

    $('#table').text('')
//    $('#table').append('<table><tr><th>Make</th><th>Description</th></tr>')
    // data.forEach( (item) => {
    //    $('#table').append('<tr><td>' + item.make + '</td><td>' + item.description + '</td></tr>')
    // })
    // $('#table').append('</table')

  //   var shoesData = [{name:"Nike", price:199.00 }, {name:"Loafers", price:59.00 }, {name:"Wing Tip", price:259.00 }]
  //   console.log(data, typeof data, shoesData, typeof shoesData)
  // //Get the HTML from the template   in the script tag​
  //  var theTemplateScript = $("#shoe-template").html()
  //  var theTemplate = handlebars.compile(theTemplateScript)
  //  $(".shoesNav").append(theTemplate(data))


     var theTemplateScript = $("#pb-template").html()

     //Compile the template​
     var theTemplate = handlebars.compile(theTemplateScript);
     $("#table").append(theTemplate(data));

  }

}
