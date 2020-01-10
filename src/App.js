import React, { Component } from "react";
import Todoitems from "./components/toDoItems.jsx";
import Todoadd from "./components/toDoAdd.jsx";

class App extends Component {
  state = {
    todo: [
      { id: 1, item: "Me", done: false },
      { id: 2, item: "You", done: true }
    ]
  };

  toggleStatus = (status, position) => {
    // this.setState = 
    
    console.log(status, position);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>To Do List</h1>
        <Todoadd />
        <Todoitems todo={this.state.todo} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}

export default App;
