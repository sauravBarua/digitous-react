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
      activeTab:'',
      isSelected:''
    }
  }

  selectAdd = (event)=>{
    this.setState({
      activeTab:"add"

    })
  }

  selectList = (event)=>{
    this.setState({
      activeTab:"list"

      
    })
  }
  
  selectPay = (event)=>{
    this.setState({
      activeTab:"pay"

      
    })
  }
  
  
  render() {
    return (
      <div>
        <Button onClick= {this.selectAdd} isSelected ={this.state.activeTab === "add"} >Add </Button>
        <Button onClick= {this.selectList} isSelected ={this.state.activeTab=== "list"} >List</Button>
        <Button onClick= {this.selectPay} isSelected ={this.state.activeTab=== "pay"} >Pay</Button>


      </div>
    )
  }
}
