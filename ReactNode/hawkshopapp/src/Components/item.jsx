// shows the individual item component
// for use with itemDisplay
// for search item display
import {Component} from "react";

class Item extends Component{

    render() {
        return(

            <div class="border border-dark rounded mt-2">
                <h1>{this.props.name}</h1>
                <h3>${this.props.price}</h3>
                <h3>{this.props.condition}</h3>
                <a href={`http://localhost:3000/itempages/${this.props.id}`}><button>=></button></a>

            </div>

        );
    }
}




export default Item;