import {Component} from "react";
import FilesUploadComponent from "./FilesUploadComponent"
import LoginPage from "./loginPage";

class Upload extends Component{



    render(){
        return (
            <div>
                <FilesUploadComponent></FilesUploadComponent>
                <LoginPage></LoginPage>
            </div>
        )
    }
}

export default Upload