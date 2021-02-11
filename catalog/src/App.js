import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Film from "./Components/Film";
import movies from "./movies";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            {movies.map((movie) => {
              return (
                <span class="navbar-brand mb-0 h1">
                  <Link to={`/movie/${movie.id}`}> <img src={movie.image}alt="image" /></Link>
                </span>
              );
            })}
          </div>
        </nav>

        <Switch>
          <Route
            path="/movie/:id"
            render={(props) => {
              return <Film {...props} />;
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;