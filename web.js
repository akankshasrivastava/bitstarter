var express = require('express');

var app = express.createServer(express.logger());

var buffer = new Buffer(150);

fs.writeFileSync('/bitstarter/index.html', buffer, function (err) {
  if (err) throw err;
console.log('Saved it');	
});

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
