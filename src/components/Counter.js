import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    };
  }

  
  increase() {
    this.setState({
      number: this.state.number + 1
    });
  }

  decrese() {
    this.setState({
      number: this.state.number - 1
    });
  }
  render() {
    return (
      <div>
        <p>
          Give these buttons the ability to increment and decrement the number.
          We will be using this base to start learning react :)
        </p>
        <hr />
        <button onClick={this.increase.bind(this)}>+</button>
        <h1>{this.state.number}</h1>
        <button onClick={this.decrese.bind(this)}>-</button>
      </div>
    );
  }
}
export default Counter;
