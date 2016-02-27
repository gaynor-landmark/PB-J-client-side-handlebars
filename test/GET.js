// this test the server GET request
var test = require('tape')
var request = require('supertest')
var server = require('../server/server')

//arrange the data
var expectedPeanutButter = [ {
    "id": 1,
    "make": "Eta",
    "description": "Crunchy"
    },
    {
      "id": 2,
      "make": "Eta",
      "description": "Crunchy"
    },
    {
      "id": 3,
      "make": "Eta",
      "description": "Crunchy"
    }
  ]


  test("GET returns the peanutButter", function(t){
    request(server).get('/peanutButter')
    .expect('Content type', /JSON/)
	  .expect(200)
	  .end(function (err, res) {
	  	t.equal(res.type, 'application/json', 'application/json')
	  	t.equal(res.status, 200, 'status code 200')
	  	t.equal(res.body.length, 3, 'correct length')
	  	t.deepEqual(expectedPeanutButter, res.body, "the actual data and expected data are the same")
	  })
    t.end()
  } )
