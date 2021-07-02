import React, { Component } from "react";

export default class ExampleClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  increase = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  inputChange = (event) => {
    this.setState(() => ({
      name: event.target.value,
    }));
  };

  render() {
    return (
      <div>
        <div>
          <p>Please, write your name</p>
          <input
            type="text"
            name="name"
            onChange={this.inputChange}
            value={this.name}
          />
          {this.state.name ? <p>Hello {this.state.name}</p> : undefined}
        </div>
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.increase}>Click me</button>
        </div>
      </div>
    );
  }
}
