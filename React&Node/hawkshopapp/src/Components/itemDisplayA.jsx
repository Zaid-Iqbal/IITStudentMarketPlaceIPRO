// item display page for account

// will be able to display all the items when given a list of items
// could be used for search and account
import {Component} from "react";
import ItemDisplayA from "./itemDisplayA";
import ItemA from "./itemA";

class ItemDisplay extends Component{
    /*
    state ={
        items : [
            {id:'1230', name:'Hi', price:23, condition:'Bad' },
            {id:'1231', name:'Hello', price:450, condition:'Fair' },
            {id:'1232', name:'Bye', price:203, condition:'Good' }
        ]
    }*/

    render() {
        return(
            <div class='p-2'>
                {this.props.items.map(item => (
                    <ItemA key = {item.id}
                           name = {item.name}
                           price = {item.price}
                           condition = {item.condition}
                           id={item.id}
                           item={item}>
                    </ItemA>

                ))}
            </div>
        );
    }
}




export default ItemDisplay;