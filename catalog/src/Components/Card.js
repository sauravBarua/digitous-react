import React, { Component } from 'react'
import { movies } from "./data";

const click = (e) => {
    e.target.setAttribute( 'src', 'http://localhost:3000/About');
   }

export default class Card extends Component {
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
               {movies.map((item)=><img onClick = {click} style= {cardStyle} src={item.image} alt="image" />)}
                
            </div>
        )
    }
}
