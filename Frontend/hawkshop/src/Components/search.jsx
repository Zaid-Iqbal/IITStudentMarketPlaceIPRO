import {Component} from "react";
import ItemDisplay from "./itemDisplay";


class Search extends Component{
    constructor() {
        super();
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.state.value);
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        alert('A name was submitted: ' + this.state.value);// instead of this we send this.state.val to back
        event.preventDefault();
    }

    render() {
        return(

            <div class='m-2'>


                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                           aria-describedby="search-addon" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-outline-dark">search</button>
                </div>
                <ItemDisplay></ItemDisplay>
            </div>
        );
    }
}




export default Search;