import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";






 class App extends React.Component {
  render() {
    return (
      <Router>
            <Switch>
                <Route exact path='/' component={Home}>Home</Route>
                <Route path='/weekly' component={Weekly}>weekly</Route>
                <Route path='/weekly-battle' component={WeeklyBattle} >weekly-battle</Route>
                <Route path='/popular'component={Popular}>popular</Route>
                <Route path='/popular-battle'component={PopularBattle} >popular-battle</Route>
                <Route path='/favorites'component={Favorites} >favorites</Route>
              
            </Switch>
        </Router>
     
    )
  }
}
export default App;