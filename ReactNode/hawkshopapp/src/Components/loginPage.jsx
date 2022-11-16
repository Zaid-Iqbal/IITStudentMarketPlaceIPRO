import {Component} from "react";
import { conntectToDB } from "./demo_db_connection";

class LoginPage extends Component{

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({email: event.target.email, password: event.target.password});
    }
    
    handleSubmit(event) {
        conntectToDB();
        event.preventDefault();
        // leave these for zaid to use with the database
        const email = event.target[0].value;
        const password = event.target[1].value;
    }

    

    render(){
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={this.handleSubmit}>
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" value="Submit">
                        Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        <a href="#">Register</a>
                    </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginPage