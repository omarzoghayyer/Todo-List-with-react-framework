import React, { Component } from 'react';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    
    this.state={
      newItem:" ",
      list:[]
       
    }
  }
 
updateInput(key, value){
  //update react state
  this.setState({
    [key]: value
  })
}

deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];
  //filter out item being deleted
  const updatedList= list.filter(item => item.id !==id);
  this.setState({list: updatedList})
}
 



  addItem(){
    //create item with unique id
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice(),

    };
    
   
    //copy of current list of items
    const list = [...this.state.list];
   
    //add new item to list
    list.push(newItem);

    //update state with new list and reset newitem input
    this.setState({
      list,
      addItem:""
    }); 
  }
 
  
  render(){
    return( 
      
      <div className="App">
       <div className="header">
        Add an Item...
        <br/>
      

        <input
          type="text"
          placeholder="Start typing..."
          value={this.state.newItem}
          onChange={e => this.updateInput("newItem", e.target.value)}
      
        />
        <button 
        type="submit"
        onClick={()=> this.addItem() }>
          Add
         </button>
         <br/>
         <ul>
           {this.state.list.map(item => {
             return(
               <li key={item.id}>
                 {item.value}
                 <button className="xbtn"
                 onClick={()=> this.deleteItem(item.id)}
                 >
                   X
                 </button>

               </li>
             )
           })}
         </ul>

       </div>
      </div>
    )
  }
}

export default App;
