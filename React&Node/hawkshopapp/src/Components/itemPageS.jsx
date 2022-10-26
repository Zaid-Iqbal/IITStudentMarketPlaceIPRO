import {Component} from "react";
import {useParams} from "react-router-dom";

class ItemPageS extends Component{
    constructor() {
        super();
        this.itemID = window.location.pathname.split('/')[2];
        this.state={
            details:[
                {name:'name'},
                {price:'price'},
                {description:'description'},
                {condition:'condition'},
                {seller:'seller'}
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>Product Display</h1>
                <h1>{this.itemID}</h1>
            </div>
        );
    }
}



export default ItemPageS;