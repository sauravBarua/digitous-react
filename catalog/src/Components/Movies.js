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
        <div class="jumbotron">
          {movies
            .filter((movie) => {
              return movie.id === parseInt(this.props.match.params.id);
            })
            .map((movie) => {
              return (
                <div className="card">
                <div className="row no-gutters">
                    <div className="col-auto">
                    <img src={movie.image} alt={`movies title ${movie.title}`} />
        
                    </div>
                    <div className="col">
                        <div className="card-block px-2">
                            <h6 className="card-title">Titre: {movie.title}</h6>
                            <p className="card-text">Directeur: {movie.director}</p>
                             <p className="card-text">Stars:
                            {movie.stars.map((star) => {
                              return <p>{star}</p>;
                            })}</p>
                            <p className="card-text">Description: {movie.description}</p>
                        </div>
                    </div>
                </div>
                
          </div>
              );
            })}
        </div>
      </div>
    );
  }
}
