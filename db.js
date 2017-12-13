/**
 * Created by fabio on 02/12/2017.
 */


const pg = require('pg')
const pgClientData = require('./secrets')
const pgClient = new pg.Client(pgClientData);

pgClient.connect()

//const res = await pgClient.query('CREATE TABLE IF NOT EXISTS ASSIGNMENTS (EXAM_ID integer, STUDENT_ID integer, JSON_DATA JSON)')

//pgClient.query('ALTER TABLE ASSIGNMENTS ADD TIMESTAMP timestamp')


pgClient.query('CREATE TABLE IF NOT EXISTS ASSIGNMENTS (EXAM_ID integer, STUDENT_ID integer, TIMESTAMP timestamp, JSON_DATA JSON)')
    .then(r=> {console.log(r)})
    .catch(e=> console.log(e))



exports.addAssignment= function addAssignment (examId, studentID, data) {
    const text = 'insert into assignments (EXAM_ID, STUDENT_ID, TIMESTAMP, JSON_DATA) values ($1, $2, CURRENT_TIMESTAMP, $3) returning *'
    const values = [examId, studentID, data]
    pgClient.query(text, values)
        .then(res => {
            for (const i of res.rows) console.log(i)
        })
        .catch(e => console.error(e.stack))
}

exports.getAllAssignments= function getAllAssignments (examId) {
    const text = 'select * from assignments where EXAM_ID=$1'
    const values = [examId]
    pgClient.query(text, values)
        .then(res => {
            for (const i of res.rows) console.log(i)

        })
        .catch(e => console.error(e.stack))
}



//module.exports = db