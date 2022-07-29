import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Nishant",
      age: 1,
      array: [1, 2, 3, 4, 5, 6],
    };
  }

  changeStatus = () => {
    this.setState({
      age: this.state.age * 2,
      name: "Uday",
    });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.changeStatus}>Change State</button>
      </div>
    );
  }
}
