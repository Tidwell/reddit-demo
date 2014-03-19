//require express and create our app instance
var express = require('express');
var app = express();

//tell express that we want to be able to parse form data
app.use(express.urlencoded());

//set up a route to serve index.html when the user goes to localhost:8080
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/views/index.html');
});

//when the user submits a form to localhost:8080/test we serve test.html
app.post('/test', function(req, res) {
	res.sendfile(__dirname + '/views/test.html');
});

//bind the server to port 8080
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});