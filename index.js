var express = require('express')
var app = express()
var fs = require('fs')

fs.readFile('content', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  app.set('port', (process.env.PORT || 5000))
  app.use(express.static(__dirname + '/public'))

  app.use(function(req, res, next) {
	  app.get('/', function(request, response) {
       response.send(data);
      });
    next();
  });
 
  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port')) 
  })

  console.log(data);
});
