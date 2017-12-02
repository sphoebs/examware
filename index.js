/**
 * Created by fabio on 02/12/2017.
 */


var express = require('express'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());


app.set('port', (process.env.PORT || 5000));



var students = []

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    // response.render('pages/index');
    response.send('hello')

});

app.get('/about', function(request, response) {
    // response.render('pages/index');
    response.send('about')

});

app.get('/student/:id', function(req, res) {
    res.send('student ' + req.params.id);
});

app.put('/student/:id', function(req, res) {
    res.send('student ' + req.params.id);
});

app.post('/assignment/', function(req, res) {

    // var ip = (req.headers['x-forwarded-for'] ||
    // req.connection.remoteAddress ||
    // req.socket.remoteAddress ||
    // req.connection.socket.remoteAddress).split(",")[0];

    var vip = req.ip

    console.log(req.body)
    res.send(req.body);
});

app.post('/test/:studentID', function(req, res) {

    // fetch url and run test cases

});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

