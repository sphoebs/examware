/**
 * Created by fabio on 04/12/2017.
 * Here we only test for success cases and valid data
 */

const root = process.env.SERVER_URL || 'http://127.0.0.1:5000'
const fetch = require("node-fetch")
const assignmentsRoot = root+'/assignments'
const exampleAssignment =  {
    "workerID": "dsad544",
    "taskID": "veniam sit proident",
    "assignmentResult": {"url":"some url"},
    "status": "minim"
}


// helper methods - you can put these  in a separate file if you have many tests file and want to reuse them

const postAssignments = function (newAssignment) {
    return fetch(assignmentsRoot, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(newAssignment)
    })
}

const putAssignments = function (assignment) {
    return fetch(assignmentsRoot+'/assignmentID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(assignment)
    })
}

const deleteAssignments = function (assignmentID) {
    return fetch(assignmentsRoot+'/'+assignmentID, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }//,
    })
}


const getManyAssignments = function () {
    return fetch(assignmentsRoot, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}

const getOneAssignment = function (assignmentID) {
    return fetch(assignmentsRoot+'/'+assignmentID, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        },
    })
}

// ACTUAL TEST CASES




test('basic post and get', () => {
    return postAssignments(exampleAssignment)
        .then(postResponse => { return postResponse.json() })
        .then(postResponseJson => {
            exampleAssignment.assignmentID = postResponseJson.assignmentID
            return getOneAssignment(exampleAssignment.assignmentID)
        })
        .then(getResponse => {return getResponse.json()})
        .then(jsonResponse => {expect(jsonResponse.assignmentResult).toEqual(exampleAssignment.assignmentResult)})
        //.catch(e => {console.log(e)})
});



test('delete by assignmentID - basic response', () => {
    return deleteAssignments(exampleAssignment.assignmentID)
        .then(response => {   expect(response.status).toBe(204) })
        //.catch(e => {console.log(e)})
});


test('delete by assignmentID - item actually deleted', () => {
    return getOneAssignment(exampleAssignment.assignmentID)
        .then(res => {expect(res.status).toBe(404)})
        //.catch(e => {console.log(e)})
});








