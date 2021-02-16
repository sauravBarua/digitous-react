import React, { Component } from "react";
import { movies } from "./data";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class Movies extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-warning">
          <a className="navbar-brand font-weight-bold">
            <Link className=" text-danger text-decoration-none" to="/Home">
              Movies
            </Link>
          </a>
        </nav>
        {movies
          .filter((movie) => {
            return movie.id === parseInt(this.props.match.params.id);
          })
          .map((movie) => {
            return (
              <div>
                <img src={movie.image} alt={`movies title ${movie.title}`} />
                <h4>Titre: {movie.title}</h4>
                <p>Directeur: {movie.director}</p>
                <p>
                  Stars:
                  {movie.stars.map((star) => {
                    return <p>{star}</p>;
                  })}
                </p>
                <p className="description">Description: {movie.description}</p>
              </div>
            );
          })}
      </div>
    );
  }
}
