import React from 'react'

export default class Button extends React.Component {
    render() {
        return (
            <div>
                <button  type= "button" className = "btn btn-primary" onClick= {this.props.onClick} > {this.props.children} </button>
            </div>
        )
    }
}
