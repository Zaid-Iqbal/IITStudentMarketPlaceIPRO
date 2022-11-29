import {Component} from "react";
import ItemDisplayA from "./itemDisplayA";

class Account extends Component{
    constructor() {
        super();
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
        
        this.state = {
            items: []
        }

    }


    render() {

        return(
            <div>

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