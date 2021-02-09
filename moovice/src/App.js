import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "./components/home";

 class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component={home}>Home</Route>
                <Route path='/weekly' component={weekly}>weekly</Route>
                <Route path='/weekly-battle' component={weekly-battle} >weekly-battle</Route>
                <Route path='/popular'component={popular}>popular</Route>
                <Route path='/popular-battle'component={popular-battle} >popular-battle</Route>
                <Route path='/favorites'component={favorites} >favorites</Route>
              
            </Switch>
        </BrowserRouter>
     
    )
  }
}
export default App;