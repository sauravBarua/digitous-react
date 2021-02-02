import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './composants/Add';
import List from './composants/List';
import Pay from './composants/Pay';
import Button from './composants/Button';


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      activeTab: '',
      items: []
    }
  }
  
  render() {
    return (
      <div>
        <button/>
        <button/>
        <button/>
      </div>
    )
  }
}
