import React from "react";
import Popular from "./Popular";
import image from "./Image/Film-High-Quality-PNG.png";

class Card extends React.Component {
  render() {
    const cardStyle = {
      padding: "2rem 4rem",
      borderRadius: " 10px",
      boxShadow: "1px 1px 5px rgba(0,0,0,0.25)",
      marginBottom: " 2rem",
      backgroundColor: "white",
    };
    return (
      <div style={cardStyle}>
        <p>Title: {this.props.title} </p>
        <img
          style={{ width: "20%" }}
          src={`https://image.tmdb.org/t/p/w300/${this.props.poster_path}`}
          alt="image"
        />
        <p>Release date: {this.props.release_date}</p>
        <p>Overview: {this.props.overview}</p>
      </div>
    );
  }
}
export default Card;
