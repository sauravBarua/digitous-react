import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { movies } from "./data";
import Movies from "./Movies";

export default class Home extends Component {
  render() {
    const cardStyle = {
      width: "150px",
      padding: 0,
      margin: "10px",
      backgrondColor: "#FFF",
      filter: "drop-shadow(0px 0px 5px #666)",
    };
    return (
      <div>
        <BrowserRouter>
          <nav className="navbar navbar-light bg-warning">
            <a className="navbar-brand font-weight-bold">
              <Link className=" text-danger text-decoration-none" to="/Home">
                Movies
              </Link>
            </a>
          </nav>
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
              {movies.map((movie) => {
                return (
                  <span class="navbar-brand mb-0 h1">
                    <button
                      onClick={() =>
                        this.props.history.push(`/movie/${movie.id}`)
                      }
                    >
                      <img
                        style={cardStyle}
                        src={movie.image}
                        alt={`movies title ${movie.title}`}
                      />
                    </button>
                  </span>
                );
              })}
            </div>
          </nav>
        </BrowserRouter>
      </div>
    );
  }
}
