import React from 'react'

 class PopularBattle extends React.Component {
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
              movies: [...data.results],
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    render() {
        return (
            <div>
                <h1>PopularBattle</h1>
            </div>
        )
    }
}
export default  PopularBattle;
