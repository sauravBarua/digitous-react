import React from "react";
import './App.css';


var constantes = [
  {tempMin:-20},
  {tempMax:40},
  {heartMin:80},
  {heartMax:180},
  {stepsMin:0},
  {stepsMax:50000}
];

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary ">Hello !</h1>
        <div className="container-fluid">
        <div className="row">
          <P>Heart :{this.constantes[2]} </P>
          <P>Temperature :{this.constantes[0]}</P>
          <P>Steps :{this.constantes[4]}</P>
        
        </div>
        
      </div>
        
      </div>
    );
  }
}

export default App;