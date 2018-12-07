### `Note`
- Must to pass an object to state:

  this.state = { currentColor: RED }

- To change state, pass an object to setState()

  this.setState( {currentColor: this.getNextColor(this.state.currenColor)} )

- Flow:
  
  Run all in class
  
  Then render()
  
  if an variable in 'state' change, then re-render()

- Name's first letter of component must to UPPERCASE

  class TrafficLight extends Component # class trafficLight extends Component
