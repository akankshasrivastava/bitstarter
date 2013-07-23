var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var buffer = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var img = fs.readFileSync('./travelogo.jpg');
app.get('/travelogo.jpg', function(request, response) {
  response.writeHead(200, {'Content-Type': 'image/jpeg' });
  response.end(img, 'binary');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
