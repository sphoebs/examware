/**
 * Created by fabio on 02/12/2017.
 */


const fetchJson = require("node-fetch-json")

const root = 'http://127.0.0.1:5000'

//const root = 'https://examse2.herokuapp.com'

fetchJson(root+'/assignments', { method: 'GET', body: {'name': 'giovanni'}})
    .then (j => console.log(j.status))
    .catch(e => console.log(e))

fetchJson(root+'/assignments', { method: 'POST', body: {'name': 'giovanni-post'}})
    .then (j => console.log(j))
    .catch(e => console.log(e))

// fetchJson(root+'/assignment', { method: 'POST', body: {'name': 'giovanni'}})
//     .then (j => console.log(j))
//     .catch(e => console.log(e))
