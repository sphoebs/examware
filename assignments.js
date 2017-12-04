/**
 * Created by fabio on 02/12/2017.
 */


var express = require('express')
var assignments = express.Router()

assignments.get('/', function (req, res) {
    res.json({'xx': 'cc'})
})

module.exports = assignments