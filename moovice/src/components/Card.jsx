import React from 'react'
import Popular from './Popular'

 class Card extends React.Component {
    render() {
        return (
            <div>
                <img></img>
                <Popular/>
                <p>release_date</p>
                <p>overview</p>
            </div>
        )
    }
}
export default Card;
