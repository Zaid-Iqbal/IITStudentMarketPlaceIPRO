import {Component} from "react";
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, getBytes  } from "firebase/storage";

class ItemPageS extends Component{
    constructor() {
        super();
        this.itemID = window.location.pathname.split('/')[2];
        this.state={
            name:'name',
            price:'price',
            description:'description',
            condition:'condition',
            seller:'seller',

        }
    }

    render() {
        return(
            <div>
                <h1>Product Display</h1>
                <h1>{this.state.name}</h1>
                <h1>{this.state.price}</h1>
                <h1>{this.state.description}</h1>
                <h1>{this.state.condition}</h1>
                <h1>{this.state.seller}</h1>
            </div>
        );
    }
}



export default ItemPageS;