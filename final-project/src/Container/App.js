import './App.css';
import Navigation from '../Component/Navigation/Navigation';
import Logo from '../Component/Logo/Logo';
import ImageLinkForm from '../Component/ImageLinkForm/ImageLinkForm';
import Rank from '../Component/Rank/Rank';
import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import FaceRecognition from '../Component/FaceRecognition/FaceRecognition';
import Signin from '../Component/SignIn/SignIn';
import Register from '../Component/Register/Register';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input:'',
      imageurl:'',
      box:{},
      route:'',
      isSignedIn:'false',
      user:{
            id:'',
            name:'',
            email:'',
            password:'',
            entries:0,
            joined:''
      }
    }
    ;
  }

  onInputChange= (event)=>{
    this.setState({input:event.target.value});
  }

  onSubmit = () => {
  this.setState({ imageurl: this.state.input }, ()=>{
    fetch("https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs", this.clarifaiFaceRecog(this.state.imageurl))
      .then(response => response.json())
      .then(result => this.displayFaceBox(this.calculateFaceLocation(result)))
      .catch(error => console.log('error', error));
  ;
  });
}
loadUser = (data)=>{
  this.setState({user:{
    id:data.id,
    name:data.name,
    email:data.email,
    entries:data.entries,
    joined:data.joined
}})
  console.log(this.state.user);
}

  calculateFaceLocation = (data) =>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftcol: clarifaiFace.left_col * width,
      topRow:clarifaiFace.top_row*height,
      rightcol:width-(clarifaiFace.right_col*width),
      bottomRow:height - (clarifaiFace.bottom_row *height)
    }
  }

  displayFaceBox= (box)=>{
    this.setState({box:box})
    console.log(this.state.box);
  }

  onRouteChange = (target) =>{
    if(target === 'signin'){
      this.setState({isSignedIn:false});
    }else if (target==='home'){
      this.setState({isSignedIn:true});
    }
    this.setState({route:target});
  }

 clarifaiFaceRecog(imageurl) {
  const PAT = '34cfbd83524240968bdef269eec3ab3e';
  // Specify the correct user_id/app_id pairings
  // Since you're making inferences outside your app's scope
  const USER_ID = 'a250ze49y0u3';
  const APP_ID = 'my-first-application-ph7kee';
  // Change these to whatever model and image URL you want to use
  const IMAGE_URL = imageurl;

  ///////////////////////////////////////////////////////////////////////////////////
  // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
  ///////////////////////////////////////////////////////////////////////////////////
  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}


  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        <Logo />
        {this.state.route === 'home' 
        ?  (
          <div>
            <Rank></Rank>
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onSubmit={this.onSubmit}
            ></ImageLinkForm>
            <ParticlesBg type="circle" bg={true} />
            <FaceRecognition
              box={this.state.box}
              imageURL={this.state.imageurl}
            ></FaceRecognition>
          </div>
        ):(
          this.state.route==='signin'?
          <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          :<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
        ) 
        }
      </div>
    );
  }
}

export default App;
