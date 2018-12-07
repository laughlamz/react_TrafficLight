import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/trafficLight';

const RED = 0;
const BLUE = 1;
const GREEN = 2;

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: RED
    };

    setInterval( () => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch(color) {
        case RED:
            return BLUE;
        case BLUE:
            return GREEN;
        default:
            return RED;
    }
  };
  
  render() {
    const { currentColor } = this.state;

    return (
      <div className="App">
        <TrafficLight currentColor={currentColor}/>
      </div>
    );
  }
}

export default App;
