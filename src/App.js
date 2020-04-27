import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

class App extends Component{
   render(){
      return (
         <div className="App">
            <Particles className = "particles" />
            <Navigation/>
            <Logo/>
            <Rank/>
           <ImageLinkForm/> {/*
            <FaceRecognition/>}*/}
       </div>
      );
   }
}

export default App;
