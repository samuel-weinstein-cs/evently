import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
      <div>
        <p>Welcome to <span>Evently!</span></p>
        <p>Enter username and password to continue. </p>
        <form onSubmit={(e) =>
          this.props.handleLogin(e,
            {

              username: this.state.username,
              password: this.state.password

            }
          )
        }>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={this.onChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={this.onChange}
          />
          {/* <Link to="/"> */}
          <input
            type="submit"
            className="button"
            value="Log in"
          />

          {/* </Link> */}
          <Link to="/register">
            <h1>New User? Sign up here</h1>
          </Link>
        </form>
      </div >
    )
  }
}
export default Login;
