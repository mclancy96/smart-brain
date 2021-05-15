import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const particleOptions = {
  particles: {
    number: {
      value:30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const app = new Clarifai.App({
  apiKey: 'd12e6783cd344b6b937bb8cfd8806e99'
})

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value)
  }
  onButtonSubmit = () => {
    console.log('click')
    app.models.predict("c0c0ac362b03416da06ab3fa36fb58e3", "https://samples.clarifai.com/face-det.jpg").then( 
      (response) => {

      },
      (err) => {

      }
    )
  }
  render(){
    return(
      <div className="App">
        <Particles className="particles"
          params={particleOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onInputChange}/>
        {/* <FaceRecognition/>  */}
      </div>
    )
      
  }
}

export default App;
