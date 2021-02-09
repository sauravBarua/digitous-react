import React, { Component } from "react";

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=4ba7a0b430074bec33494026c1ada710"
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.setState({
          movies: response,
        });
      })
      .catch((response) => {
        this.setState({
          movies: "Erreur lors de la recuperation",
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.movies.map((movie) => {
          return {...movie}
        })}
      </div>
    );
  }
}
