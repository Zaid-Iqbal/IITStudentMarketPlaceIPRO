import {Component, useState} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
      this.state.img = this.state.image;

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