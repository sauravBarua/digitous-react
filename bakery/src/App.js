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
      activeTab,
      isSelected,
      items
    }
  }

  selectAdd = (event)=>{
    this.setState({

    })
  }

  selectList = (event)=>{
    this.setState({
      
    })
  }
  
  selectPay = (event)=>{
    this.setState({
      
    })
  }
  
  
  render() {
    return (
      <div>
        <button onClick= {this.selectAdd} isSelected ={this.state.activeTab === Add} >Add</button>
        <button onClick= {this.selectList} isSelected ={this.state.activeTab=== List} >List</button>
        <button onClick= {this.selectPay} isSelected ={this.state.activeTab=== Pay} >Pay</button>


      </div>
    )
  }
}
