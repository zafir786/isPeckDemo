import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    let loggedIn = false;
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  
  

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === "A" && password === "B") {
      localStorage.setItem("token", "Zafir");
      this.setState({
        loggedIn: true,
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/Dashboard" />;
    }
    return (
      <div>
        <h3>Welcome login form</h3>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default LoginForm;
