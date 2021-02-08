import React from 'react'
import {movies} from './Components/data'



  
 class App extends React.Component {
  render() {
    var cardStyle = {
      height: "200px",
      width: "150px",
      padding: 0,
      margin: " 10px",
      backgtoundColor:"#FFF",
      filter: "drop-shadow(0px 0px 5px #666)",
    }
    return (
      <div>
         {movies.map((item)=><img style= {cardStyle} src={item.image} alt="image" />)}
      </div>
    )
  }
}
export default App;
