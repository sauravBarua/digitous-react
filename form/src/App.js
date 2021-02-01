import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props){
    super(props)
      this.State = {
        email:'',
        password:'',
        status:'submit'
    }
  }
  render() {
    return (
      <div>
        <div className="container">
        <form>
          <div className="form-group">
            <label> Email address:</label>
            <input type="text" className="form-control" id="email" />
          </div>
          <div className="form-group">

            <label>Password:</label>
            <input type="password" className="form-control" id="pwd"  />
          </div>
          <div>
            <label>Remember me:</label>
            <input type="checkbox" />

          </div>
          <div className="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>

        </form>
        </div>
      </div>
    )
  }
}
export default App;