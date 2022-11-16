import {Component} from "react";

class FilesUploadComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          image: null
        };
        this.product = {
          price: null,
          name: null,
          img: null,
          description: null,
        }
    
       // if we are using arrow function binding is not required
       //  this.onImageChange = this.onImageChange.bind(this);
    }

    uploadProduct(){
      this.product.name = document.getElementById("ItemName").value; 
      this.product.price = document.getElementById("price").value;
      this.product.description = document.getElementById("description").value;
      this.product.img = this.state.image;

      //upload to in aws products
      var mysql = require('mysql');
      var sql = "SELECT * FROM products WHERE name = ${input}"
      var con = mysql.createConnection({
          host: "hs-db.crubpolzuyub.us-east-2.rds.amazonaws.com",
          user: "admin",
          password: "password", 
          port: '3306',
          database: "hs_db"
        });
      con.query(sql, function(err, result)
      {
          if (err) 
              throw err;
          else
              var usersRows = JSON.parse(JSON.stringify(result));
              for (let i = 0; i<usersRows.length; i++){
                  if(usersRows[i]['name'].includes(input));{
                      console.log(usersRows[i]['name'])
                      items.push(usersRows[i]['name']);
                  }
              }
              console.log(usersRows);
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