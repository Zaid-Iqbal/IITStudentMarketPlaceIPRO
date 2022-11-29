import {Component, useState} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";

class FilesUploadComponent extends Component{

    product = {
      price: null,
      name: null,
      img: null,
      description: null,
    }

    constructor(props) {
        super(props);
        this.state = {
          imageZ: null,
          image: null,
          price: null,
          name: null,
          img: null,
          imgType: null,
          description: null,
          condition: null,
        };
    
   
       // if we are using arrow function binding is not required
       this.uploadProduct = this.uploadProduct.bind(this);
       this.setImageUpload = this.uploadProduct();
        
    }

    

    async uploadProduct(){
      this.state.name = document.getElementById("ItemName").value; 
      this.state.price = document.getElementById("price").value;
      this.state.description = document.getElementById("description").value;
      this.state.condition = document.getElementById("condition").value;
      
      
      const metadata = {
        contentType: null,
      };

      switch (this.state.imgType) {
        case 'jpg':
          metadata.contentType = 'image/jpeg';
          break;
        default:
          alert(`File Type Not supported`);
          return;
      }
      
      const firebaseConfig = {
        apiKey: "AIzaSyDdqPURRGGaGgWDyZQPg_2GFuCwvA2VAWQ",
        authDomain: "hawkshop-62355.firebaseapp.com",
        projectId: "hawkshop-62355",
        storageBucket: "hawkshop-62355.appspot.com",
        messagingSenderId: "813719104855",
        appId: "1:813719104855:web:b89ec6f1c67784ab4fe212",
        measurementId: "G-31Q8NF975T"
      };
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      try {
        const docRef = await addDoc(collection(db, "products"), {
          name: this.state.name,
          price: this.state.price,
          description: this.state.description,
          condition: this.state.condition,
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      //upload photo onto db
      const storage = getStorage(app);
      console.log("this.state.img in uploadProduct: " + String(this.state.img));
      uploadBytes(ref(storage, this.state.name), this.state.img, metadata).then((snapshot) => {
        console.log('Uploaded photo: ' + this.state.img);
      });

      // uploadBytes(storageRef, this.state.img, metadata).then((snapshot) => {
      //   console.log('Uploaded photo');
      // });
      
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
      
    }

    

    onImageChange = event => {
      if (event.target.files && event.target.files[0]) {
        this.alertLog(event)
        let file = event.target.files[0];
        var promise = Promise.resolve();
        var fileByteArray = [];
        let p = new Promise((resolve, reject) => {
          var reader = new FileReader();
          reader.onerror = reject;
          reader.readAsArrayBuffer(file);
          reader.onload = (function (evt) {
            if (evt.target.readyState === FileReader.DONE) {
              var arrayBuffer = evt.target.result;
              var array = new Uint8Array(arrayBuffer);
              // console.log(array);
              resolve(array);
            }
          });
        });
        
        p.then((result) => {
          // console.log("Result: " + String(result));
          // set photo on view
          this.setState({
          image: URL.createObjectURL(file),
          imgType: file.name.split('.')[1]
        });

        this.state.img = result;

        // console.log("FileByteArray: " + String(fileByteArray));
        // console.log("this.state.img: " + String(this.state.img));
        })        
      }      
    };
    
    ReadFile(file)
    {
      return 
      
    }

    alertLog(event){
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img));
    }

    render() {
        return (
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="card text-center text-black border-secondary mb-3 .mx-auto">
                <h1 class="card-title">Upload Item</h1>
                <div class="card-body">
                  <img src={this.state.image} width="300" height="300" />
                  <input type="file" name="myImage" onChange={this.onImageChange} />
                  <div>
                      <input type="text" id="ItemName" class="form-control" placeholder="Item Name" aria-label="ItemName" aria-describedby="basic-addon1"/>
                  </div>
                  <div class="input-group price">
                  <div class="input-group-prepend">
                    <span class="input-group-text">$</span>
                    </div>
                      <input type="number" id="price" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                      <div class="input-group-append">
                      <span class="input-group-text">.00</span>
                    </div>
                  </div>
                  <div>
                      <input type="text" id="description" class="form-control" placeholder="Description" aria-label="Description" aria-describedby="basic-addon1"/>
                  </div>
                  <div>
                      <input type="text" id="condition" class="form-control" placeholder="Condition(New, Good, Used)" aria-label="Condition" aria-describedby="basic-addon1"/>
                  </div>
                  <button type="button" class="btn btn-primary" onClick={this.uploadProduct}>Upload Product</button>
                  {/* <button onClick={this.alertLog} >This</button> */}
                </div>
              </div>
            </div>
          </div>
        );
      }
}

export default FilesUploadComponent