import React, { Component } from "react";

class Todoadd extends Component {
  state = {};
  render() {
    return (
      <form style={this.formStyle}>
        <input style={this.formStyle} type="text" placeholder="Enter your task"/>
        <button type="submit">+</button>
      </form>
    );
  }

  formStyle={
      textAlign:'center'
  }
}

export default Todoadd;
