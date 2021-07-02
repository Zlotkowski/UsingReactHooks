import React, { Component } from "react";

export default class UserInfoClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, userId: 1 };
  }

  idChange = (event) => {
    this.setState(() => ({
      userId: event.target.value,
    }));
  };

  componentDidMount() {
    console.log("componentDidMount runs one time!");
    fetch("https://jsonplaceholder.typicode.com/users/" + this.state.userId)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <div>
        User Id:
        <input type="text" value={this.state.userId} onChange={this.idChange} />
        <br />
        Name: {this.state.user.name}
        <br />
        Email: {this.state.user.email}
      </div>
    );
  }
}
