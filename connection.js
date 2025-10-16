const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost", user: "root", password: "", database: "CuyUniversity"
})

module.exports = db