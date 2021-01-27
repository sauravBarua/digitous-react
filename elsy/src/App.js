import React from "react";
import Box from "./components/Box";
import  "./styles/global.css";

const constantes ={
  tempMin:-20,
  tempMax: 40,
  heartMin:80,
  heartMax:180,
  stepsMin:0,
  stepsMax:50000
}
const  Water = {
  icon:"local_drink",
  color: "#3A85FF",
  value: 1.5,
  unit: "L"
}
 
class App extends React.Component {
 


  render() {
    return (
			<div className="container-fluid">
        <div className="row">
          <p>Heart :{constantes.heartMin} </p>
          <p>Temperature : {constantes.tempMin} </p>
          <p>Steps : {constantes.stepsMin} </p>
        </div>
        <div className="row">
          <Box icon={Water.icon} color={Water.color} value={Water.value} unit={Water.unit}/>
          <Box icon={"directions_walk"} color={"black"} value={3000} unit={"steps"}/>
          <Box icon={"favorite"} color={"red"} value={120} unit={"bpm"}/>
          <Box icon={"wb_sunny"} color={"yellow"} value={-10} unit={"°C"}/>

        </div>

			</div>
		)
  };
}

export default App;
