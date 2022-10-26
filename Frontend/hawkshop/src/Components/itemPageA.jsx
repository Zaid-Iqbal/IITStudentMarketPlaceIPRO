import {Component} from "react";

class ItemPageS extends Component{
    constructor() {
        super();
        this.itemID = window.location.pathname.split('/')[2];
        this.state={
            name:'name',
            price:'price',
            description:'description',
            condition:'condition',

        }
    }

    render() {
        return(
            <div>


                <div className="form-group">
                    <label>{this.state.name}</label>
                    <input className="form-control" id="newName" placeholder="New Name"></input>
                </div>
                <div className="form-group">
                    <label >{this.state.price}</label>
                    <input className="form-control" id="newPrice" placeholder="New Price"></input>
                </div>
                <div className="form-group">
                    <label >{this.state.description}</label>
                    <input className="form-control" id="newDescription" placeholder="New Description"></input>
                </div>
                <div className="form-group">
                    <label >{this.state.condition}</label>
                    <input className="form-control" id="newCondition" placeholder="New Condition"></input>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        );
    }
}

// todo get the stuff from backend
// send new stuff to backend

export default ItemPageS;