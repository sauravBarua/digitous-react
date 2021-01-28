import React from "react";
import Box from "./components/Box";
import  "./styles/global.css";


const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;


class App extends React.Component {


    constructor(props) {
    super(props);
    this.state = {
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000
    };
 }

 onHeartChange(event){
  this.setState({heart: event.target.value});
}

onStepsChange(event){
  this.setState({steps: event.target.value});
}
   
  render() {
    return (
			<div className="container-fluid">
      
        <div className="row">
          <Box icon={"local_drink"} color={ "#3A85FF"} value={this.state.water} unit={"L"}/>
          <Box icon={"directions_walk"} color={"black"} value={this.state.steps} min= {stepsMin} max= {stepsMax}  unit={"steps"}  onchange={this.onStepsChange.bind(this)}/>
          <Box icon={"favorite"}
            color={"red"}value={this.state.heart}min={heartMin} max={heartMax} 
             unit={"bpm"} 
             onchange={this.onHeartChange.bind(this)}/>
          <Box icon={"wb_sunny"} color={"yellow"} value= {this.state.temperature} unit={"°C"}/>

        </div>

			</div>
		)
  };
}

export default App;
