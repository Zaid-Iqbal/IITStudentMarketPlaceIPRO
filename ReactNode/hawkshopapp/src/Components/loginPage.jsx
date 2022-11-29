import {Component} from "react";
import { conntectToDB } from "./demo_db_connection";
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import Account from "./account";
import {
    Route,
    Navigate,
    useNavigate
  } from 'react-router-dom'

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
        // conntectToDB();
        // leave these for zaid to use with the database
        const email = event.target[0].value;
        const password = event.target[1].value;

        const firebaseConfig = {
            apiKey: "AIzaSyDdqPURRGGaGgWDyZQPg_2GFuCwvA2VAWQ",
            authDomain: "hawkshop-62355.firebaseapp.com",
            projectId: "hawkshop-62355",
            storageBucket: "hawkshop-62355.appspot.com",
            messagingSenderId: "813719104855",
            appId: "1:813719104855:web:b89ec6f1c67784ab4fe212",
            measurementId: "G-31Q8NF975T"
          };
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        
        const snapshot = getDocs(collection(db, "users")).then((snapshot) => {
            snapshot.forEach((doc) => {
                // Downloads the record
                if (String(doc.data().email).toLowerCase() == email && String(doc.data().password) == password) {
                    sessionStorage.setItem("user",email);
                    // useNavigate("/account");
                    window.location = "/account";
                }
                else{
                    alert('Username and/or password is incorrect');
                }
            });
        });

        event.preventDefault();
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