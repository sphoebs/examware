/**
 * Created by fabio on 04/12/2017.
 */

const root = process.env.SERVER_URL || 'http://127.0.0.1:5000'
const fetch = require("node-fetch")
const assignmentsRoot = root+'/assignments'
const data = {'test': 'tested'}

//var assignmentID

// Nota : questo file contiene solo basic tests, non contiene tutti i test cases necessari ad esempio per testare che
// tutti i required values ci siano.

const postAssignments = function (data) {
    return fetch(assignmentsRoot, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
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


const getAssignments = function () {
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



test('get assignments is alive', () => {

    return fetch(assignmentsRoot,   { headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'}
    })
        .then(response => {expect(response.status).toEqual(200) } )
        .catch(e => {console.log(e)})
});





test('basic post and get', () => {

    return postAssignments(data)
        .then(postResponse => { return postResponse.json() })
        .then(postResponseJson => {
            data.assignmentID = postResponseJson.assignmentID
            return getOneAssignment(data.assignmentID)
        })
        .then(getResponse => {return getResponse.json()})
        .then(jsonResponse => {expect(jsonResponse.test).toBe('tested')})
        .catch(e => {console.log(e)})
});



// test('basic put and get', () => {
//
//     return fetch(assignmentsRoot,   { headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
//     })
//         .then(response => {expect(true).toEqual(false) } )
//
// });

test('delete by assignmentID', () => {
    return deleteAssignments(data.assignmentID)
        .then(response => { return response.json() })
        .then(jresponse => {
            expect(jresponse.assignmentID).toEqual(data.assignmentID)
        } )
        .catch(e => {console.log(e)})
});







