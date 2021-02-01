import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class From extends React.Component {
 
    render() {
      return (
        <div>
          <div className="container">
          <form>
            <div className="form-group">
              <label> Email address:</label>
              <input type="text" className="form-control"  />
            </div>
            <div className="form-group">
  
              <label>Password:</label>
              <input type="password" className="form-control"  />
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
  export default From;