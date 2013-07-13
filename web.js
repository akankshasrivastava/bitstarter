var express = require('express');

var app = express.createServer(express.logger());

fs.readFile('/bitstarter/index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

y = buf.toString()

app.get('/', function(request, response) {
  response.send(y);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
