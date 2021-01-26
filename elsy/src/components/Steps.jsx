import React from "react";

export class Steps extends React.Component {
  render() {
    return (
      <div className="box, col-sm-3 col-6">
          <h1>hello from jsx</h1>
          <div className="material-icons" style={{fontSize:100,color:"black"}}>
            {this.props.icons}
          </div>
         
      </div>
    );
  }
}

export default Steps;