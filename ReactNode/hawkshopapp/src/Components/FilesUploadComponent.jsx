import {Component} from "react";
import  { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

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
          image: null,
          price: null,
          name: null,
          img: null,
          description: null,
          condition: null,
        };
   
       // if we are using arrow function binding is not required
       this.uploadProduct = this.uploadProduct.bind(this);
        
    }

    uploadProduct(){
      this.state.name = document.getElementById("ItemName").value; 
      this.state.price = document.getElementById("price").value;
      this.state.description = document.getElementById("description").value;
      this.state.condition = document.getElementById("condition").value;
      this.state.img = this.state.image;

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

      var mysql = require('mysql');
      var sql = "INSERT INTO products (userID, description, itemCondition, price, productName) VALUES (?,?,?,?,?)"
      var con = mysql.createConnection({
        host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "password", 
        port: '3306',
        database: "hs_db"
      });
      con.query(sql,[sessionStorage.getItem("user"), this.state.description, this.state.condition, this.state.price, this.state.name], function(err, result)
      {
        if (err) 
          throw err;
        else
        {
          console.log("Product Uploaded"+result);
        }
      })
      con.end();
      
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          this.alertLog(event)
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
    };

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