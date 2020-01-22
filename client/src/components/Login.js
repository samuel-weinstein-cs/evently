import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })

  }
  render() {
    return (
      <div className="login">
        <p>Welcome to <span1>Evently!</span1></p>
        <p>Enter username and password to continue. </p>
        <br />
        {this.props.isLoggedOut ?
          <form className="login-form" onSubmit={(e) =>
            this.props.handleLogin(e,
              {
                username: this.state.username,
                password: this.state.password
              }
            )
          }>
            <label htmlFor="username"><label-text>Username</label-text></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={this.onChange}
            />
            <label htmlFor="password"><label-text>Password</label-text></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={this.onChange}
            />
            <input
              type="submit"

              value="Log in"

            />
          </form> : <Redirect to="/" />}
        <br />
        <Link to="/register">
          <span1>New User? Sign up here</span1>
        </Link>
      </div >
    )
  }
}
export default Login;
