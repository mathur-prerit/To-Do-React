import React, { Component } from "react";
import Todoitems from "./components/toDoItems.jsx";
import Todoadd from "./components/toDoAdd.jsx";

class App extends Component {
  index=0
  state = {
    todo: [
      // { id: 1, item: "Me", done: false },
      // { id: 2, item: "You", done: true }
    ]
  };




  toggleStatus = (status, position) => {
    console.log(status, position);
    this.setState({todo:[this.state.todo.map(item => {
      if(item.id===position){
        item.status=status;
      }
    return item
    })]})
  };

  deleteIt= (position) =>{
    // console.log(position)
    const deleteTheItem=[...this.state.todo.filter(item =>(item.id!== parseInt(position)))]
    this.setState({ todo: deleteTheItem})
  }

  addItem = itemName => {
    this.setState({ todo: [...this.state.todo, { id: this.index, item: itemName, done: false }] });
    this.index +=1

  };

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>To Do List</h1>
        <Todoadd todo={this.state.todo} addItem={this.addItem} />
        <Todoitems todo={this.state.todo} deleteIt={this.deleteIt} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}

export default App;
