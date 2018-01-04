/**
 * Created by fabio on 02/12/2017.
 */


const express = require('express'),
    bodyParser = require('body-parser');
const assignments = express.Router()

var uuid = require('uuid-v4');

const deliveredAssignments = []



assignments.get('/', function (req, res) {
    //console.log('get, delivering:',deliveredAssignments)
    //TODO: check if there is a filter, and filter
    res.json(deliveredAssignments)

})

assignments.post('/', function (req, res) {
    const newAssignment = req.body
    newAssignment.assignmentID = uuid()
    newAssignment.dateUpdated = new Date()
    deliveredAssignments.push(newAssignment)
    res.json(newAssignment)
})

assignments.get('/:assignmentID', function (req, res) {
    const assignmentID = req.params.assignmentID
    const i = deliveredAssignments.findIndex(item => {return item.assignmentID === assignmentID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredAssignments[i])
    }
})

assignments.put('/:assignmentID', function (req, res) {
    const assignmentID = req.params.assignmentID
    const i = deliveredAssignments.findIndex(item => {return item.assignmentID === assignmentID})
    deliveredAssignments[i] = req.body
    deliveredAssignments[i].assignmentID = assignmentID
    deliveredAssignments[i].dateUpdated = new Date()
    res.json(deliveredAssignments[i])
})

assignments.delete('/:assignmentID', function (req, res) {
    const assignmentID = req.params.assignmentID
    if (!assignmentID) res.sendStatus(404)
    const i = deliveredAssignments.findIndex(item => {return item.assignmentID === assignmentID})
    const deleted = deliveredAssignments[i]
    deliveredAssignments.splice(i,1)
    res.sendStatus(204)
})

module.exports = assignments