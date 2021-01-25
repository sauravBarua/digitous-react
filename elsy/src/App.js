import React from "react";
import './App.css';

var constantes = [
  {tempMin:-20},
  {tempMax:40},
  {heartMin:80},
  {heartMax:180},
  {stepsMin:0},
  {stepsMax:50000}
]

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="text-primary ">Hello !</h1>
      </div>
    );
  }
}

export default App;