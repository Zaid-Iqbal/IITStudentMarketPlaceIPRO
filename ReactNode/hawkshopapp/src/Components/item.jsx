// shows the individual item component
// for use with itemDisplay
// for search item display
import {Component} from "react";

class Item extends Component{

    render() {
        return(
            
            <div class="card-deck">

                <div className="card" style={{width: '18rem',}} >

                    <img className="card-img-top" src={this.props.pic} alt="Item img"></img>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.name}</h5>
                        <h6 className="card-subtitle">${this.props.price}</h6>
                        <h6 className="card-subtitle">{this.props.condition}</h6>
                        <a href={`http://localhost:3000/itempages/${this.props.id}`} className="btn btn-primary">View Item</a>
                    </div>
                </div>
            </div>

            // <div class="border border-dark rounded mt-2">
            //     <img src={this.props.pic} alt='Image Not Found'/>
            //     <h1>{this.props.name}</h1>
            //     <h3>${this.props.price}</h3>
            //     <h3>{this.props.condition}</h3>
            //     <a href={`http://localhost:3000/itempages/${this.props.id}`}><button>=></button></a>

            // </div>

        );
    }
}




export default Item;