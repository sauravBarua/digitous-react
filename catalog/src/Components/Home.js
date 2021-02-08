import React, { Component } from "react";
import Card from "./Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


  const click = (e) => {
    e.target.setAttribute( 'src', 'http://localhost:3000/About');
   }

export default class Home extends Component {
  render() {
 
    return (
      <div>
        <Card  />
      </div>
    );
  }
}
