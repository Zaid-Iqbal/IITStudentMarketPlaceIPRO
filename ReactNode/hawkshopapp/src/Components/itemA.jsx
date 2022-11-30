// item component for the itemDisplayA for account page

import {Component} from "react";

class Item extends Component{

    render() {
        return(


            <div class="card-deck">

                <div className="card" style={{width: '18rem',}}>

                    <img className="card-img-top" src={this.props.pic} alt="Item img"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle">${this.props.price}</h6>
                        <h6 className="card-subtitle">{this.props.condition}</h6>
                        {/* <h6 className="card-subtitle">{this.props.pic}</h6> */}
                        <a href={`http://localhost:3000/itempagea/${this.props.id}`} className="btn btn-primary">Edit item</a>
                    </div>
                </div>

                {/* <div className="card" style={{width: '18rem',}}>

                    <img className="card-img-top" src="" alt="Item img"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle">${this.props.price}</h6>
                        <h6 className="card-subtitle">{this.props.condition}</h6>
                        <a href={`http://localhost:3000/itempagea/${this.props.id}`} className="btn btn-primary">Edit item</a>
                    </div>
                </div> */}
            </div>
        );
    }
}



export default Item;