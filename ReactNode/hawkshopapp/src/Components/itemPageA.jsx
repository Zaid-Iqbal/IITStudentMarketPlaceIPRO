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
            sold:'False',

            nameN: '',
            priceN:'',
            descriptionN:'',
            conditionN:'',
            soldN:'',

        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeDes = this.handleChangeDes.bind(this);
        this.handleChangeCond = this.handleChangeCond.bind(this);
        this.handleChangeSold = this.handleChangeSold.bind(this);
    }

    handleChangeName(event){
    // handle change to name
        this.setState({nameN: event.target.value});
        console.log(event.target.value);
    }

    handleChangePrice(event){
        // handle change to price
        this.setState({priceN: event.target.value});
        console.log(event.target.value);
    }

    handleChangeDes(event){
        // handle change to des
        this.setState({descriptionN: event.target.value});
        console.log(event.target.value);
    }

    handleChangeCond(event){
        // handle change to cond
        this.setState({conditionN: event.target.value});
        console.log(event.target.value);
    }

    handleChangeSold(event){
        // handle change to sold
        this.setState({soldN: event.target.checked});
        console.log(event.target.checked);
    }

    handleSubmit(event) {
        // send to db and update the  vars with N
        alert('name: ' + this.state.nameN +
            ' price: ' + this.state.priceN +
            ' des: ' + this.state.descriptionN +
            ' cond: '+ this.state.conditionN +
            'sold: ' + this.state.soldN
        );
    }

    render() {
        return(
            <div>


                <div className="form-group">
                    <label>{this.state.name}</label>
                    <input type="search" className="form-control" id="newName" placeholder="New Name" onChange={this.handleChangeName}></input>
                </div>
                <div className="form-group">
                    <label >{this.state.price}</label>
                    <input type="search" className="form-control" id="newPrice" placeholder="New Price" onChange={this.handleChangePrice}></input>
                </div>
                <div className="form-group">
                    <label >{this.state.description}</label>
                    <input type="search" className="form-control" id="newDescription" placeholder="New Description" onChange={this.handleChangeDes}></input>
                </div>
                <div className="form-group">
                    <label >{this.state.condition}</label>
                    <input type="search" className="form-control" id="newCondition" placeholder="New Condition" onChange={this.handleChangeCond}></input>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={this.handleChangeSold}></input>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Marked Sold
                        </label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Save</button>
            </div>
        );
    }
}

// todo get the stuff from backend
// send new stuff to backend

export default ItemPageS;