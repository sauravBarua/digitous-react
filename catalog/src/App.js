import React, { Component } from "react";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Movies from "./Components/Movies"


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/movie/:id" component={Movies} />
              <Route render={() => <h1>Not found!</h1>} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
