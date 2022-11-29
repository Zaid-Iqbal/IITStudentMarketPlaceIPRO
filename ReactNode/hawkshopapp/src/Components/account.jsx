import {Component} from "react";
import ItemDisplayA from "./itemDisplayA";
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, getBytes  } from "firebase/storage";


class Account extends Component{
    constructor() {
        super();

        this.state = {
            orgitems: []
        }

        // this.state = {value: '',
        //     orgitems:[
        //         // dummy data
        //         {id:'1230', name:'Laptop', price:23, condition:'Bad' },
        //         {id:'1231', name:'English Book', price:450, condition:'Fair' },
        //         {id:'1232', name:'Fridge', price:203, condition:'Good' },
        //         {id:'1233', name:'Brand New Fridge', price:23, condition:'Bad' },
        //         {id:'1234', name:'Math 251 Book', price:450, condition:'Fair' },
        //         {id:'1235', name:'TI-84 Calculator', price:203, condition:'Good' },
        //         {id:'1236', name:'MacBook Laptop', price:23, condition:'Bad' },
        //         {id:'1237', name:'Samsung Fridge', price:450, condition:'Fair' },
        //         {id:'1238', name:'Vaccum', price:203, condition:'Good' },
        //         {id:'1239', name:'Small Rug', price:23, condition:'Bad' },
        //         {id:'1240', name:'Hello', price:450, condition:'Fair' },
        //         {id:'1241', name:'Dyson Vaccum', price:203, condition:'Good' },
        //         {id:'1242', name:'Big Rug', price:23, condition:'Bad' },
        //         {id:'1243', name:'CS 351 book', price:450, condition:'Fair' },
        //         {id:'1244', name:'HP Laptop', price:203, condition:'Good' },
        //         {id:'1245', name:'Basic Calculator', price:23, condition:'Bad' },
        //         {id:'1246', name:'Dell Laptop', price:450, condition:'Fair' },
        //         {id:'1247', name:'Rug', price:203, condition:'Good' },
        //     ],

        //     items:[]

        // };
        
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

        const snapshot = getDocs(collection(db, "users")).then((snapshot) => {
            snapshot.forEach((doc) => {
                var email = sessionStorage.getItem("user");
                const storage = getStorage(app);
                const img = getDownloadURL(ref(storage, doc.data().name)).then((url) => {
                    return url;
                }).catch((error) => {
                    console.log("error getting pic for record:" + doc.data().name + "\nError Message: " + error);
                    return null;
                });
                // Downloads the record
                if (String(doc.data().email).toLowerCase() == email) {
                    this.state.items.push({key: doc.id, pic: img, name: doc.data().name , price: doc.data().price, condition: doc.data().condition})
                }
            });
            var items = this.state.items;
            this.setState({items});
        });
    }

    render() {

        return(
            <div>
                <h1>Account</h1>
                <h2>Email: {sessionStorage.getItem("user")}</h2>
                <a  href="http://localhost:3000/upload" >
                    <button type="button" className="btn btn-primary btn-floating" >Add New Item</button>
                </a>
                <ItemDisplayA items={this.state.orgitems}></ItemDisplayA>
            </div>
        );
    }
}

// todo get floating add button

export default Account;