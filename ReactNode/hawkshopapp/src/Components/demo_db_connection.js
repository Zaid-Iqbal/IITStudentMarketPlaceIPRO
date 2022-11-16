var mysql = require('mysql');

var con = mysql.createConnection({
  host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "password", 
  port: '3306',
  database: "hs_db"
});

con.connect(function(err) {
  if (err) 
    throw err;
  else
    console.log("Connected!");
});

//get column names
var sql = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'products'"
con.query(sql, function(err, result)
{
  console.log(result);      //gets val of userID column for row 0
})


// //all records from customers table
// var sql = "SELECT * FROM customers"
// con.query(sql, function(err, result)
// {
//   usersRows = JSON.parse(JSON.stringify(result));
//   console.log(usersRows[0]['userID']);      //gets val of userID column for row 0
// })