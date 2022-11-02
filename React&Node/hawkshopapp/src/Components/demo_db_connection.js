var mysql = require('mysql');

var con = mysql.createConnection({
  host: "hawkshop-database.crubpolzuyub.us-east-2.rds.amazonaws.com",
  user: "jreligioso",
  password: "3MysLzX6Qv9US3Quz2E4", 
  port: '3306', 
  database: 'hawkshop-database'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});