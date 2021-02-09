import React, { Component } from "react";

 class Popular extends Component {
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
      .then((res) => res.json())
      .then((moviesData) => {
        this.setState({
          movies: moviesData,
        });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map(movie=>(
            <li>
              title: {movie.title}
            </li>
          ))}
        </ul>
      </div>
    )
}}

export default Popular;

