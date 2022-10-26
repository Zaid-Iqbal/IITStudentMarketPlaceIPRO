import {Component} from "react";

class Upload extends Component{

    render(){
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input></input>
                    </div>
                </form>
                <button type="button" class="btn btn-success">Upload</button>
            </div>
        )
    }
}

export default Upload