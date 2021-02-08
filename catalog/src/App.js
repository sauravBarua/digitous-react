import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BasicExample() {
 
  return (
    <Router>
      <div>
        <nav >
          
          <Link to="/Home">Home</Link>

          <Link to="/About">About</Link>
        </nav>

        <hr />

        <Switch>
          
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
