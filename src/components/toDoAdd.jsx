import React, { Component } from "react";

class Todoadd extends Component {
  // state = {
  //   title:''
  // };

  formSubmit=(e)=>{
    e.preventDefault();
    const inputItem=document.getElementById('input-item').value
    this.props.addItem(inputItem)
    e.target.reset();
  }

  render() {

    return (
      <form style={this.formStyle} onSubmit={this.formSubmit}>
        <input style={this.formStyle} id={'input-item'} type="text" placeholder="Enter your task"/>
        <button type="submit">+</button>
      </form>
    );
  }

  formStyle={
      textAlign:'center'
  }

}

export default Todoadd;
