var express = require('express');

var app = express.createServer(express.logger());

function readPage(page) {
	var fs = require("fs");
	return fs.readFileSync(page, 'utf8');
}

var webPages = ["./index.html"];

app.get('/', function(request, response) {
  var pageContents = readPage(webPages[0]);
  response.send(pageContents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
