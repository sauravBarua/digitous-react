import React from "react";

class Box extends React.Component {
    render() {
      const {color, value} = this.props;
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{color: color, fontSize: 100}}>
                    {this.props.icon}
                </span>
                <p>{value} {this.props.unit}</p>
            </div>
        )
    }
}

export default Box;