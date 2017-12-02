/**
 * Created by fabio on 02/12/2017.
 */


const fetchJson = require("node-fetch-json")

const root = 'http://127.0.0.1:5000'

fetchJson(root+'/assignment', { method: 'POST', body: {'name': 'giovanni'}})
    .then (j => console.log(j))
