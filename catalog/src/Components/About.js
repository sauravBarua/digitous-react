import React, { Component } from 'react'
import { movies } from "./data";

export default class About extends Component {
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
                <img style= {cardStyle} src={movies[0].image} alt="image" />
                <p> {movies[0].title} </p>
                <p> Director: {movies[0].director} </p>
                <p>Stars: {movies[0].stars} </p>
                <p>Description: {movies[0].description} </p>
            </div>
        )
    }
}
