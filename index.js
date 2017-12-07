/**
 * Created by fabio on 02/12/2017.
 */

const db = require('./db')

const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());



const assignments = require('./assignments')

// app.use(function (req, res, next) {
//     console.log('\n Request IP Address: ', req.ip, 'Time:', Date.now())
//     next()
// })

app.use('/assignments', assignments)

app.set('port', (process.env.PORT || 5000));


app.get('/', function(request, response) {
    // response.render('pages/index');
    response.send('hello')

});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

