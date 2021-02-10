import React from 'react'
import movies from './movies'

class App extends React.Component {
  render() {
    return (
      <div>

        {movies.map((movie)=>{
           return (
            <div>
            <img src={movie.image} />
           <p>Titre: {movie.title}</p>
           <p>Directeur: {movie.director}</p>
           <p>Acteurs: {movie.stars}</p>
           </div>
           )
        

        })}
        
               
      </div>
    )
  }
}
export default App;
