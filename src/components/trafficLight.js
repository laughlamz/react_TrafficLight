import React, { Component } from 'react';
import classNames from 'classnames';
import './trafficLight.css';

const RED = 0;
const BLUE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    render() {
      const { currentColor } = this.props;
      console.log('Rendering...', currentColor);

      return (
        <div className="TrafficLight">
            <div className={classNames('bulb', 'red', {
              active: currentColor === RED
            })}></div>
            <div className={classNames('bulb', 'blue', {
              active: currentColor === BLUE
            })}></div>
            <div className={classNames('bulb', 'green', {
              active: currentColor === GREEN
            })}></div>
        </div>
      );
    }
  }
  
  export default TrafficLight;
  