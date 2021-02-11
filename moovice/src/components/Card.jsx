import React from "react";
import Popular from "./Popular";
import image from "./Image/Film-High-Quality-PNG.png";

class Card extends React.Component {
  render() {
    const cardStyle = {
      width: "100px",
      padding: 0,
      margin: "10px",
      backgrondColor: "#FFF",
      filter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
      <div >
        <img style={cardStyle}
          src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
          alt="image"
        />
     
      </div>
    );
  }
}
export default Card;
