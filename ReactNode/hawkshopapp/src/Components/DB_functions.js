// var mysql = require('mysql');

// // Test Connection: node demo_db_connection.js

// var con = mysql.createConnection({
//   host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
//   user: "admin",
//   password: "password",
//   port: '3306',
//   database: "hs_db"
// });

// // export function test()
// // {
// //   console.log("demo_db")
// // }

// // //Test connection
// // con.connect(function(err) {
// //   if (err)
// //     throw err;
// //   else
// //     console.log("Connected!");
// // });

// // //get column names
// // var sql = "SELECT * FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = N'products'"
// // con.query(sql, function(err, result)
// // {
// //   console.log(result);      //gets val of userID column for row 0
// // })


// // //first record product ID from customers table
// // var sql = "SELECT * FROM customers"
// // con.query(sql, function(err, result)
// // {
// //   usersRows = JSON.parse(JSON.stringify(result));
// //   console.log(usersRows[0]['userID']);      //gets val of userID column for row 0
// // })

// //all records from products table
// var sql = "SELECT * FROM products"
// con.query(sql, function(err, result)
// {
//   console.log(result);      //gets val of userID column for row 0
// })

// // //all records from products table
// // var sql = "SELECT * FROM customers"
// // con.query(sql, function(err, result)
// // {
// //   console.log(result);      //gets val of userID column for row 0
// // })


// con.end();

// if(sessionStorage.getItem("user") == null)
      // {
      //   console.log("user not defined. Rerouting to login page...");
      //   window.location.href = "/";
      // }
      // else
      // {
      //   //TODO: item condition needed
      //   //TODO: User ID needed
      //   //TODO: add IMG column to products table

      //   //upload to in aws products
      //   var mysql = require('mysql');
      //   var sql = "INSERT INTO products (userID, description, itemCondition, price, productName) VALUES (?,?,?,?,?)"
      //   var con = mysql.createConnection({
      //       host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
      //       user: "admin",
      //       password: "password", 
      //       port: '3306',
      //       database: "hs_db"
      //     });
      //   con.query(sql,[sessionStorage.getItem("user"), this.state.description, this.state.condition, this.state.price, this.state.name], function(err, result)
      //   {
      //     if (err) 
      //       throw err;
      //     else
      //     {
      //       console.log("Product Uploaded"+result);
      //     }
      //   })
      //   con.end();
      // }

      // var mysql = require('mysql');
      // var sql = "INSERT INTO products (userID, description, itemCondition, price, productName) VALUES (?,?,?,?,?)"
      // var con = mysql.createConnection({
      //   host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
      //   user: "admin",
      //   password: "password", 
      //   port: '3306',
      //   database: "hs_db"
      // });
      // con.query(sql,[sessionStorage.getItem("user"), this.state.description, this.state.condition, this.state.price, this.state.name], function(err, result)
      // {
      //   if (err) 
      //     throw err;
      //   else
      //   {
      //     console.log("Product Uploaded"+result);
      //   }
      // })
      // con.end();


      // var reader = new FileReader();
          // var fileByteArray = [];
          // reader.readAsArrayBuffer(img);
          // reader.onloadend = function (evt) {
          //  if (evt.target.readyState === FileReader.DONE) {
          //     var arrayBuffer = evt.target.result;
          //     var array = new Uint8Array(arrayBuffer);
          //     for (var i = 0; i < array.length; i++) {
          //       fileByteArray.push(array[i]);
          //     }
          //   }
          // }
          // console.log(fileByteArray);
          // const firebaseConfig = {
          //   apiKey: "AIzaSyDdqPURRGGaGgWDyZQPg_2GFuCwvA2VAWQ",
          //   authDomain: "hawkshop-62355.firebaseapp.com",
          //   projectId: "hawkshop-62355",
          //   storageBucket: "hawkshop-62355.appspot.com",
          //   messagingSenderId: "813719104855",
          //   appId: "1:813719104855:web:b89ec6f1c67784ab4fe212",
          //   measurementId: "G-31Q8NF975T"
          // };
          // const app = initializeApp(firebaseConfig);
          // const storage = getStorage(app);
          // const storageRef = ref(storage, 'some-child');
          // uploadBytes(storageRef, fileByteArray).then((snapshot) => {
          //   console.log('Uploaded an array!');
          // });


        //   const firebaseConfig = {
        //     apiKey: "AIzaSyDdqPURRGGaGgWDyZQPg_2GFuCwvA2VAWQ",
        //     authDomain: "hawkshop-62355.firebaseapp.com",
        //     projectId: "hawkshop-62355",
        //     storageBucket: "hawkshop-62355.appspot.com",
        //     messagingSenderId: "813719104855",
        //     appId: "1:813719104855:web:b89ec6f1c67784ab4fe212",
        //     measurementId: "G-31Q8NF975T"
        //   };
        //   const app = initializeApp(firebaseConfig);
        //   const storage = getStorage(app);
        //   const imageRef = ref(storage, "this one");
        //   uploadBytes(imageRef, img).then(() =>{
        //     console.log("uploaded");
        //   })