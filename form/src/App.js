import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValid : false,
      passwordValid : false,
      email: '',
      password: ''
    }
  }


  onEmailChange = (event)=> {
    const email= event.target.value;
    const reg = /^\S+@\S+\.\S+$/g;
    const isEmail = reg.test(email)

    this.setState({
      email,
      emailValid: isEmail
    })
  }


  onPasswordChange=(event)=> {
    let newPasswordValid = false;
    if(event.target.value.leggth >= 6){
      newPasswordValid = true;
    }else{
      newPasswordValid = false;
    }
    this.setState({
      password: event.target.value,
      passwordValid : newPasswordValid
    })
  }

  handleSubmit =(event)=> {
    event.preventDefault()
  }

  render() {
    return(
      <div className="container mt-5">
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