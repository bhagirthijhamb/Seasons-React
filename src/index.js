import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // First function to be called with props object
  constructor(props) {
    // we re overwriting the constructor function so we
    // refer to parents constructor function to get its functionality
    super(props); 
    this.state = { lat: null, errMessage: '' }

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

  // React says we have to define render!!
  render (){
      if(this.state.errMessage && !this.state.lat){
        return <div>Error: {this.state.errMessage}</div>
      }
      if(!this.state.errMessage && this.state.lat){
        return <div>Latitude: {this.state.lat}</div>
      }
      return <div>Loading...</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));