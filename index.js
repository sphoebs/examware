/**
 * Created by fabio on 02/12/2017.
 */


const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const db = require('./db')


const assignments = require('./assignments')



// app.use(function (req, res, next) {
//     console.log('\n Request IP Address: ', req.ip, 'Time:', Date.now())
//     next()
// })

app.use('/assignments', assignments)

app.set('port', (process.env.PORT || 5000));




// var students = []


app.get('/', function(request, response) {
    // response.render('pages/index');
    response.send('hello')

});

// app.get('/about', function(request, response) {
//     // response.render('pages/index');
//     response.send('about')
//
// });

// app.get('/student/:id', function(req, res) {
//     res.send('student ' + req.params.id);
// });
//
// app.put('/student/:id', function(req, res) {
//     res.send('student ' + req.params.id);
// });


    // var ip = (req.headers['x-forwarded-for'] ||
    // req.connection.remoteAddress ||
    // req.socket.remoteAddress ||
    // req.connection.socket.remoteAddress).split(",")[0];

//     var vip = req.ip
//
//     console.log(req.body)
//     res.send(req.body);
// });
//
// app.post('/test/:studentID', function(req, res) {
//
//     // fetch url and run test cases
//
// });


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

