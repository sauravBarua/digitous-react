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

const dataArray = {
    icon: ["directions_walk","favorite",],
    color: ["black","red",],
    value: [ 3000,120,],
    unit: ["steps","bpm"]
  }

  const Temperature =["wb_sunny","yellow", -10,"°C"]
   
 
 

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
          <Box icon={dataArray.icon[0]} color={dataArray.color[0]} value={dataArray.value[0]} unit={dataArray.unit[0]}/>
          <Box icon={"favorite"} color={"red"} value={120} unit={"bpm"}/>
          <Box icon={Temperature[0]} color={Temperature[1]} value={Temperature[2]} unit={Temperature[3]}/>

        </div>

			</div>
		)
  };
}

export default App;
