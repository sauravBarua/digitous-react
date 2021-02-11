import React from "react";
import Card from './Card'

class PopularBattle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentBattle:0
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
          movies: [...data.results],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


 
  render() {
    const flim = this.state.movies[0];
    console.log("I am from render",flim);
    return (
      <div>
      <h1 style={{color: "red"}} >Popular Battle</h1>
     {this.state.movies.map((movie) => {
       return (
         <div>
           <Card  
             title={flim.title}
             release_date={flim.release_date}
             overview={flim.overview}
           />
         </div>
       );
     })}
   </div>
    );
  }
}
export default PopularBattle;
