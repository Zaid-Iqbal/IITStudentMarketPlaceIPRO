import {Component} from "react";

class FilesUploadComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
          image: null
        };
    
       // if we are using arrow function binding is not required
       //  this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
          this.alertLog(event)
          let img = event.target.files[0];
          this.setState({
            image: URL.createObjectURL(img)
          });
        }
    };

    alertLog(event){
      let img = event.target.files[0];
      console.log(URL.createObjectURL(img));
    }

    render() {
        return (
          <div>
            <div>
              <div>
                <img src={this.state.image} alt="should work" width="300" height="300" />
                <h1>Select Image</h1>
                <input type="file" name="myImage" onChange={this.onImageChange} />
                <button onClick={this.alertLog} >This</button>
              </div>
            </div>
          </div>
        );
      }
}

export default FilesUploadComponent