/**
 * Created by fabio on 02/12/2017.
 */


const pg = require('pg')

const pgClient = new pg.Client({
    user: "kumyvojuobzzge",
    password: "1c6dee0519b0eae78e740a05d19d86d86ea8e3c69b48042b51115e126972ddcf",
    database: "da1ltogcpvper7",
    port: 5432,
    host: "ec2-23-23-245-89.compute-1.amazonaws.com",
    ssl: true
});

pgClient.connect()

//const res = await pgClient.query('CREATE TABLE IF NOT EXISTS ASSIGNMENTS (EXAM_ID integer, STUDENT_ID integer, JSON_DATA JSON)')

//pgClient.query('ALTER TABLE ASSIGNMENTS ADD TIMESTAMP timestamp')


pgClient.query('CREATE TABLE IF NOT EXISTS ASSIGNMENTS (EXAM_ID integer, STUDENT_ID integer, TIMESTAMP timestamp, JSON_DATA JSON)')
    .then(r=> {console.log(r)})



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