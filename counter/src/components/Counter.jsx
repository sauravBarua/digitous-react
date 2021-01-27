import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    count: 0,
    };
  }

  decrementCount=()=>{
    this.setState({count: this.state.count - 1})
  }

  incrementCount=()=>{
    this.setState({count: this.state.count + 1})
  }

  
  render() {
    return (
  <div>
    <h1>Counter</h1>
    <h2> {this.state.count} </h2>
    <button style={{backgroundColor: "red"}}  onClick={this.decrementCount}>-</button>

    <button style={{backgroundColor: "green"}} onClick={this.incrementCount}>+</button>
    
  </div>
)
  }
}

export default Counter;