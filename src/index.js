import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
import Clock from './Clock';

class App extends React.Component {
  // First function to be called with props object
  // constructor(props) {
  //   // we re overwriting the constructor function so we
  //   // refer to parents constructor function to get its functionality
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