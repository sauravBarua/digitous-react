import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValid : false,
      passwordValid : false,
      email: '',
      password: '',
      submitClick: false
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
    this.setState({
      submitClick: true
    })
  }

  render() {
    if (this.state.submitClick === true) {
      return (<div>SUBMIT SUCCESS</div>)
    }
    return(
      <div className="container mt-5">
        <form id="contact-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" 
            className="form-control" 
            value={this.state.email} 
            onChange={this.onEmailChange}
            className={ this.state.emailValid ? 'form-control is-valid' : 'form-control is-invalid'}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" 
            className="form-control" 
            value={this.state.password} 
            onChange={this.onPasswordChange}
            className={this.state.passwordValid ? 'form-control is-valid' : 'form-control is-invalid'}
            required
             />
          </div>
        
          
          <button type="submit" className="btn btn-primary" onChange = {this.handleSubmit} >Submit</button>
        </form>
      </div>
    );
  }

}

export default App;