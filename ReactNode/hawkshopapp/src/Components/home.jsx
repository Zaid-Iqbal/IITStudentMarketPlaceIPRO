import {Component} from "react";
import LoginPage from "./loginPage";

class Home extends Component{


    render() {
        return(
            <div>
                <h1>Welcome to HawkShop</h1>
                <LoginPage></LoginPage>
            </div>
        );
    }
}




export default Home;