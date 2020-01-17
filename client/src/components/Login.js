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
  render() {
    return (
      <div>
        <p>Welcome to <span>Evently!</span></p>
        <p>Enter username and password to continue. </p>
        <form className="loginForm">
          <input type="text" placeholder="Enter Username" name="username" onChange={this.props.onChange} />
          <input type="password" placeholder="Enter Password" name="password" onChange={this.props.onChange} />
          <Link to="/"><input type="submit" className="button" value="Log in" /></Link>
          <Link to="/register"><h1>New User? Sign up here</h1></Link>
        </form>
      </div >
    )
  }
}
export default Login;