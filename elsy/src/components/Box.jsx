import React from "react";

export class Box extends React.Component {
  render() {
    return (
      <div className="box, col-sm-3 col-6">
          <h1>hello from jsx</h1>
          <div className= {this.props.icon } style={{fontSize:100,color:this.props.color}}>
          </div>
          <p> {this.props.value} </p>
          <p> {this.props.unit} </p>
         
      </div>
    );
  }
}

export default Box;