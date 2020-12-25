// App Challenges
// - Need to get the users physical location
// Need to determine the current month
// Need to chnage text and stylling based on location + month
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Clock from './Clock';

class App extends React.Component {
  // First function to be called with props object
  // Feature of JavaScript
  // Not required by React
  // constructor(props) {
      // App component is borrowing functionality fomr React.Component base calss by extending it
      // Base class has a constructor function of its own that goes through some amount of setup to set React component for us
  //   // When we define a constructor function, we are essentially overwriting the constructor function inside React.Component class but we still want that all the set up code inside React.Components custructor function gets called. So we call super with props
  //   // super is a reference to parents constructor function to get its functionality
  //   super(props); 
  //   this.state = { lat: null, errMessage: '' }
  // }

  // Bable wil build up the constructor for us like above
  state = { lat: null, errMessage: ''}

  componentDidMount(){
    console.log('My component was rendered to the screen')
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({ lat: position.coords.latitude})
      },
      (err) => {
        console.log(err);
        this.setState({ errMessage: err.message })
      }
    );
  }

  componentDidUpdate(){
    console.log('My component was just updated - it rerendered');
  }

  renderContent() {
    if(this.state.errMessage && !this.state.lat){
        return <div>Error: {this.state.errMessage}</div>
      }
      if(!this.state.errMessage && this.state.lat){
        // return <div>Latitude: {this.state.lat}</div>

        // passing state as a prop to the child component
        // return <SeasonDisplay lat={this.state.lat}/>
        return <SeasonDisplay lat={this.state.lat}/>
      }
      // return <div>Loading...</div>
      // return <Loader />
      return <Loader message="Please accept location request" />
  }

  // React says we have to define render!!
  render (){
      return (
        <div className="borderRed">
          <Clock />
          {this.renderContent()}
        </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Geolocatio API is built into most modern browsers
// geolocations apis getCurrentPosition() mehod makes an educated guess about where the user is based on the positioning hardware such as IP address, different wi-fi networks that are there.
// getCurrentPosition() method takes two callbacks - success callback, failure callback

