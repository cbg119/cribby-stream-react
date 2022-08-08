import React from "react";

import "./SignIn.css"

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userValue: "", passValue: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
  }

  handleUserChange(e) {
    this.setState({ userValue: e.target.value });
  }

  handlePassChange(e) {
    this.setState({ passValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signIn(this.state.userValue, this.state.passValue);
  }

  render() {
    return (
      <form id="login-form" onSubmit={this.handleSubmit} style={{display: "inline"}}>
        <li>
        <input
          className="col s2"
          id="username"
          type="text"
          placeholder="Username"
          value={this.state.userValue}
          onChange={this.handleUserChange}
        ></input>
        </li>
        <li> </li>
        <li>
        <input
          className="col s2"
          id="password"
          type="password"
          placeholder="Password"
          value={this.state.passValue}
          onChange={this.handlePassChange}
        ></input>
        </li>
        <li>
        <a className="waves-effect waves-dark" onClick={this.handleSubmit}>
            Sign In
        </a>
        </li>
      </form>
    );
  }
}

export default SignIn;
