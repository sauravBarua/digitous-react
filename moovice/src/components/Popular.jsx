import React from "react";
import Card from "./Card";

class Popular extends React.Component {
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
      .then((data) => {
        console.log("I am from json", data);
        this.setState({
          movies:data.results,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {

    return (
      <div >
        
        {this.state.movies.map((movie) => {
          return (
            <div>
              <Card  
                {...movie}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Popular;
