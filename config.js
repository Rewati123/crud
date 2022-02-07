const mysql = require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:'test1'
});
con.connect((err) => {
    if (err)
    {
        console.log("error is connection");
    }
})
module.exports = con;