import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Clarifai from 'clarifai';
/*import Particles from 'react-particles-js';*/

import Signin from './components/Signin/Signin.js'
import Register from './components/Register/Register.js'



const app = new Clarifai.App({
 apiKey: 'bcd8b4d5f4844dc791077458c0654f44'
});

class App extends Component{
   constructor(){
      super();
      this.state = {
         input : "", 
         imageUrl : "",
         box : {},
         route : 'signin',
         isSignedIn : false,

      }
   }

   calculateFaceLocation  = (data) =>{
      const image = document.getElementById('inputimage');

      const width = Number(image.width);
      const height = Number(image.height);

      return {
         leftcol : data.left_col* width,
         rightcol : width - (data.right_col* width),
         toprow : data.top_row * height,
         bottomrow : height - (data.bottom_row*height),
      }
   }

   displayFaceBox = (box) =>{
      console.log(box);
      this.setState({box : box});
   }

   onInputChange = (e) =>{
      this.setState({input : e.target.value});
   }

   onSubmit = () =>{ 
      this.setState({imageUrl : this.state.input })

      app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.imageUrl)
      .then(response => 
         this.displayFaceBox(this.calculateFaceLocation(response.outputs[0].data.regions[0].region_info.bounding_box)))
         
      .catch(err=> {
         // there was an error
         console.log(err);
       })
   }


   onRouteChange = (route) =>{
      if(route==='home'){
         this.setState({isSignedIn : true});
      }
      else{
         this.setState({isSignedIn : false});
      }
      this.setState({route : route});
   }

   render(){
      return (
         <div className="App">
           {/* <Particles className = "particles" />*/}
            <Navigation onRouteChange = {this.onRouteChange} 
            isSignedIn = {this.state.isSignedIn} />
            <Logo/>
            {
               this.state.route === 'home'
               ? <div>
               <Rank/>
                <ImageLinkForm
               onInputChange = { this.onInputChange } 
               onSubmit ={this.onSubmit}
               /> 
               <FaceRecognition link =  {this.state.imageUrl}
               box = {this.state.box}
               />
               </div>

                
               : (

                  this.state.route ==='signin'
                  ?<Signin onRouteChange = {this.onRouteChange}/>
                  :<Register onRouteChange = {this.onRouteChange}/>

               )
              
            }
       </div>
      );
   }
}

export default App;
