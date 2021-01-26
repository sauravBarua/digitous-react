import React from "react";
import Box from "./components/Box";
import  "./styles/global.css";
 
class App extends React.Component {
	constantes ={
    tempMin:-20,
    tempMax: 40,
    heartMin:80,
    heartMax:180,
    stepsMin:0,
    stepsMax:50000
  }
  Water = {
    icon:"local_drink",
    color: "#3A85FF",
    value: 1.5,
    unit: "L"
  }
  Steps ={
    icon: "directions_walk",
    color: "black",
    value: 3000,
    unit:"steps"
  }
  Heart ={
    icon: "favorite",
    color: "red",
    value: 120,
    unit: "bpm"
  }
  Temperature ={
    icon: "wb_sunny",
    color: "yellow",
    value: -10,
    unit: "°C"
  }

  render() {
    return (
			<div className="container-fluid">
        <h1 className="text-primary">hello</h1>
        <div className="row">
          <p>Heart :{this.constantes.heartMin} </p>
          <p>Temperature : {this.constantes.tempMin} </p>
          <p>Steps : {this.constantes.stepsMin} </p>
        </div>
        <div className="row">
          <Box/>
          <Box/>
          <Box/>
          <Box/>

        </div>

			</div>
		)
  };
}

export default App;
