import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
/*import Particles from 'react-particles-js';*/


const app = new Clarifai.App({
 apiKey: 'bcd8b4d5f4844dc791077458c0654f44'
});

class App extends Component{
   constructor(){
      super();
      this.state = {
         input : "", 
         imageUrl : "",

      }
   }

   onInputChange = (e) =>{
      this.setState({input : e.target.value});
   }

   onSubmit = () =>{ 
      // console.log("called by button");
      this.setState({imageUrl : this.state.input })
      app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
       function(response) {
         // do something with response
         console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
       },
       function(err) {
         // there was an error
       }
  );
   }

   render(){
      return (
         <div className="App">
           {/* <Particles className = "particles" />*/}
            <Navigation/>
            <Logo/>
            <Rank/>
           <ImageLinkForm
            onInputChange = { this.onInputChange } 
            onSubmit ={this.onSubmit}
            /> 
            <FaceRecognition link =  {this.state.imageUrl}/>}
       </div>
      );
   }
}

export default App;
