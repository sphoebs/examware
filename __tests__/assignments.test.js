/**
 * Created by fabio on 04/12/2017.
 */

const root = process.env.SERVER_URL || 'http://127.0.0.1:5000'

const fetch = require("node-fetch")

const assignmentsRoot = root+'/assignments'

const data = {'test': 'tested'}

var assignmentID

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

const deleteAssignments = function (data) {
    return fetch(assignmentsRoot, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
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



test('get assignments is alive', () => {

    return fetch(assignmentsRoot,   { headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                            }
                            })
        .then(response => {expect(response.status).toEqual(200) } )
});

test('basic post and get', () => {

    return postAssignments(data)
        .then(postResponse => { return postResponse.json() })
        .then(postResponseJson => {
            data.assignmentID = postResponseJson.assignmentID
            return getAssignments()
        })
        .then(getResponse => {return getResponse.json()})
        .then(jsonResponse => {

            //console.log('jsonResponse:',jsonResponse)
            const filtered = jsonResponse.filter(item => item.assignmentID ==data.assignmentID)
            //console.log('filtered:',filtered)

            expect(filtered[0].test).toBe('tested')
        })
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

    return deleteAssignments(data)
        .then(response => { return response.json() })
        .then(jresponse => {
            // console.log('delete jresponse',jresponse)
            // console.log('delete data',data.assignmentID)

            expect(jresponse.assignmentID).toEqual(data.assignmentID)
        } )

});







