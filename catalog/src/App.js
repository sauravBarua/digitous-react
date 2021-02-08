import React from 'react'

const movies = [
  {
        id : 1,
    title: "A Wrinkle in Time",
    director: "Ava DuVernay",
    stars: ["Storm Reid", "Oprah Winfrey", "Reese Witherspoon"],
    image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxNjQ5MTI3MV5BMl5BanBnXkFtZTgwMjQ2MTAyNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    description:
      "Following the discovery of a new form of space travel as well as Meg's father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil.",
  },];

  
  
  

 class App extends React.Component {
  render() {
    var cardStyle = {
      height: "200px",
      width: "150px",
      padding: 0,
      backgtoundColor:"#FFF",
      filter: "drop-shadow(0px 0px 5px #666)"
    }
    return (
      <div>
        <img style= {cardStyle} src={movies[0].image} alt="image" />
      </div>
    )
  }
}
export default App;
