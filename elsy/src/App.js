import React from "react";
 
class Home extends React.Component {
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
        <div className="row">
          <p>Heart :{this.constantes.heartMin} </p>
          <p>Temperature : {this.constantes.tempMin} </p>
          <p>Steps : {this.constantes.stepsMin} </p>
        </div>
			

			</div>
		)
  };
}

export default Home;