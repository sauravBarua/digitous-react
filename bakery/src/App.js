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

  checkTab(toCheck){
    if(this.state.activeTab == toCheck){
      return true
    }else{
      return false
    }
  }

  renderContent(){
    switch(this.state.activeTab){
      case "add":
        return <Add></Add>
      case "list":
        return <List></List>
      case "pay":
        return <Pay></Pay>
      default:
        return <Add></Add>
    }
  }
  
  
  render() {
    return (
      <div>
        <Button onClick= {this.selectAdd} isSelected ={this.state.checkTab('add')} >Add </Button>
        <Button onClick= {this.selectList} isSelected ={this.state.checkTab('list')} >List</Button>
        <Button onClick= {this.selectPay} isSelected ={this.state.checkTab('pay')} >Pay</Button>
        {this.renderContent()}
      </div>
    )
  }
}
