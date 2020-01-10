import React, { Component } from "react";

class Todo extends Component {
  checklistStyle = data => {
    if (data.done === true) {
      return {
        textDecoration: "line-through",
        textAlign: "center"
      };
    } else if (data.done === false) {
      return {
        textDecoration: "none",
        textAlign: "center"
      };
    }
  };

  markComplete = e => {
    const position = e.target.parentElement.getAttribute("id");
    const status = e.target.parentElement.firstChild.checked;
    this.props.toggleStatus(status, position);
  };

  deleteItem =(e)=>{
    // console.log(e.target.parentNode.id)
    const position=e.target.parentNode.id
    this.props.deleteIt(position);
  }

  render() {
    return (
      <div>
        {this.props.todo.map(data => (
          <div style={this.checklistStyle(data)} id={data.id} key={data.id}>
            <input type="checkbox" onChange={this.markComplete} />
            {data.item}
            <button onClick={this.deleteItem}>-</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Todo;
