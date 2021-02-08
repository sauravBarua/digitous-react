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
  },
  {
		id : 2,
    title: "The Strangers: Prey at Night",
    director: "Johannes Roberts",
    stars: ["Christina Hendricks", "Bailee Madison", "Martin Henderson"],
    image:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1OTIwODgzMV5BMl5BanBnXkFtZTgwMzUyMDgzNDM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    description:
      "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive.",
  }
];

  
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
