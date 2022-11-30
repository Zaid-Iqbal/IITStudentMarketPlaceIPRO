// shows the individual item component
// for use with itemDisplay
// for search item display
import {Component} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import ItemDisplay from "./itemDisplayA";
import { getStorage, ref, getDownloadURL, getBytes  } from "firebase/storage";


class ItemPageS extends Component{
    constructor(){
        super();

    this.state = {
        name: null,
        price: null,
        pic: null,
        description: null,
        condition: null,
        email: null,
        imgTag: null
    }
    this.itemID = window.location.pathname.split('/')[2];

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


    const snapshot = getDocs(collection(db, "products")).then((result)=> {
        result.forEach((doc) => {

            if (doc.id == this.itemID) {
                this.state.name = doc.data().name;
                this.state.price = doc.data().price;
                this.state.description = doc.data().description;
                this.state.condition = doc.data().condition;
                this.state.email = doc.data().email;
                this.state.imgTag = doc.data().imgTag;

                const storage = getStorage(app);
                    const storageRef = ref(storage, doc.data().imgTag);
                    const img = getDownloadURL(storageRef).then((url) => {
                        this.state.pic = url;
                        var temp = this.state;
                        this.setState({temp});
                        return;
                    });
            }
        });
    });
}

    // handleSubmit(event){
    //     const firebaseConfig = {
    //         apiKey: "AIzaSyDdqPURRGGaGgWDyZQPg_2GFuCwvA2VAWQ",
    //         authDomain: "hawkshop-62355.firebaseapp.com",
    //         projectId: "hawkshop-62355",
    //         storageBucket: "hawkshop-62355.appspot.com",
    //         messagingSenderId: "813719104855",
    //         appId: "1:813719104855:web:b89ec6f1c67784ab4fe212",
    //         measurementId: "G-31Q8NF975T"
    //       };
    //     const app = initializeApp(firebaseConfig);
    //     const db = getFirestore(app);


    //     const snapshot = getDocs(collection(db, "products")).then((result)=> {
    //         result.forEach((doc) => {

    //             if (doc.id == this.itemID) {
    //                 // this.state.item.push({id: doc.id, name: doc.data().name, price: doc.data().price, condition: doc.data().condition, description: doc.data().description})
    //                 this.state.name = doc.data().name;
    //                 this.state.price = doc.data().price;
    //                 this.state.description = doc.data().description;
    //                 this.state.condition = doc.data().condition;
    //                 this.state.email = doc.data().email;
    //                 this.state.imgTag = doc.data().imgTag;

    //                 var temp = this.state;
    //                 this.setState({temp});
    //                 return;
    //             }

    //         });
    //     });
    //     //  event.preventDefault();
    // }
    render() {
        return(

            // <div class="card-deck">
            //     <div className="card" style={{width: '18rem',}} > 
            //     {this.handleSubmit()}
            //     </div>
            //     <h5 className="card-title">{this.state.name}</h5>
            // </div>

            <div class="card-deck">

                <div className="card" style={{width: '35rem',}} >

                    <img className="card-img-top" src={this.state.pic} alt="Item img"></img>
                    <div className="card-body">
                        <h1 className="card-title">{this.state.name}</h1>
                        <h3 className="card-subtitle">${this.state.price}</h3>
                        <h6 className="card-subtitle">{"\nCondition: " + this.state.condition}</h6>
                        <h6 className="card-subtitle">{"\nDescription: " + this.state.description}</h6>
                        <h6 className="card-subtitle">{"\nContact Information:\n" + this.state.email}</h6>
                    </div>
                </div>
            </div>

        );
    }
}

export default ItemPageS;