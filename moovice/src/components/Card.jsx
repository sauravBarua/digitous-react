import React from 'react'
import Popular from './Popular'
import image from './Image/Film-High-Quality-PNG.png'; 

 class Card extends React.Component {
    render() {
        return (
            <div>
                <p>Title: {this.props.title}  </p>
                <img src={image} alt="image" />
                <p>Release_date: {this.props.release_date}</p>
                <p>Overview: {this.props.overview}</p>
            </div>
        )
    }
}
export default Card;
