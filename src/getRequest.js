var request = require('superagent')

module.exports = function (url, callback) {
  console.log('we are in getrequest', url, callback)
  request
    .get(url)     // the url is passed in so that the same get request can be used to return different data
    .end(function (err, res) {
      if (err) {
        console.log('error!')
      }
      console.log(res.body)
      callback(res.body)
    })
}
