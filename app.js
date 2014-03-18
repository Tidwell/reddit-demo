//require express and create our app instance
var express = require('express');
var app = express();

//tell express that we want to be able to parse form data
app.use(express.urlencoded());

//set up a route to serve our test.html when the user goes to localhost:8080/test
app.get('/test', function(req, res) {
	res.sendfile(__dirname + '/views/test.html');
});

//when the user submits a form to localhost:8080/test we just echo back the data they sent
app.post('/test', function(req, res) {
	res.end('Thank you, '+req.body.email);
});

//bind the server to port 8080
var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});