import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }


  onEmailChange = (event)=> {
    this.setState({email: event.target.value})
  }


  onPasswordChange=(event)=> {
    this.setState({password: event.target.value})
  }

  handleSubmit =(event)=> {
  }

  render() {
    return(
      <div className="App">
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange} />
          </div>
        
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }

}

export default App;