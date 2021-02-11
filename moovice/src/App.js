import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";
import Card from "./components/Card"






 class App extends React.Component {
  render() {
    return (
      <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/weekly' component={Weekly}/>
                <Route path='/weekly-battle' component={WeeklyBattle} />
                <Route path='/popular'component={Popular}/>
                <Route path='/popular-battle'component={PopularBattle} />
                <Route path='/favorites'component={Favorites} />
                <Route path='/Card'component={Card} />
              
            </Switch>
        </Router>
     
    )
  }
}
export default App;