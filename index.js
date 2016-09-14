var express = require('express')
var app = express()
var fs = require('fs')
var markdown = require( "markdown" ).markdown
var useragent = require('express-useragent');

fs.readFile('howto', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  app.use(useragent.express());
  app.set('port', (process.env.PORT || 5000))
  app.use(express.static(__dirname + '/public'))

  if req.useragent.browser === "IE"
    app.get('/', function(request, response) {
      response.send(data);
    })
  else
    app.get('/', function(request, response) {
      response.send(markdown.toHTML(data.toString()));
    })

  app.get('/useragent', function(req, res){
          res.send(req.useragent);
  });

  app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
  })

  console.log(data);
});
