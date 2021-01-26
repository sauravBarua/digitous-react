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
        </div>

			</div>
		)
  };
}

export default App;
