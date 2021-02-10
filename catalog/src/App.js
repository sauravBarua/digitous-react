import React from 'react'
import movies from './movies'

class App extends React.Component {
  render() {
    return (
      <div>
         <h2>Titre: {movies[0].title}</h2>
                <img src={movies[0].image} />
                <h3>Directeur: {movies[0].director}</h3>
                <h3>Acteurs: {movies[0].stars}</h3>
        
      </div>
    )
  }
}
export default App;
