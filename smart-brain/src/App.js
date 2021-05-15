import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


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
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }
  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
         this.state.input)
      .then( 
        (response) => {
          console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
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
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    )
      
  }
}

export default App;
