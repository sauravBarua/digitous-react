import React from "react";
import './App.css';


var constantes = {
"tempMin":-20,
"tempMax":40,
"heartMin": 80,
"heartMax":180,
"stepsMin":0,
"stepsMax":50000


};
  

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary ">Hello !</h1>
        <div className="container-fluid">
        <div className="row">
          <P>Heart :{constantes.heartMin} </P>
          <P>Temperature :{constantes.tempMin}</P>
          <P>Steps :{constantes.stepsMin}</P>
        
        </div>
        
      </div>
        
      </div>
    );
  }
}

export default App;