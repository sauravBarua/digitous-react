import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import From from './components/From';


class App extends React.Component {
  constructor(props){
    super(props)
      this.State = {
        value: ''
    }
  }
  render() {
    return (
      <div>
        <From />
      </div>
    )
  }
}
export default App;