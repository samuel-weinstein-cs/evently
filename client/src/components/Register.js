import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      image_url: '',
      description: '',
      interests: ''
    }
  }
  onSubmit = (e) => {

  }
  render() {
    return (
      <div>
        <p>Welcome to <span>Evently!</span></p>
        <p>New user registration </p>
        <form className="registrationForm">
          <label htmlFor="username">Enter Username</label>
          <input type="text" placeholder="Enter Username" name="username" onChange={this.props.onChange} />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.props.onChange} />

          <label htmlFor="password">Re-Enter Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={this.props.onChange} />

          <label htmlFor="image_url">Image URL</label>
          <input type="text" placeholder="Enter Image URL" name="image_url" onChange={this.props.onChange} />

          <label htmlFor="description">Bio</label>
          <input type="text" placeholder="Enter Bio" name="description" onChange={this.props.onChange} />

          <label htmlFor="interests">Interests</label>
          <input type="text" placeholder="Enter Interests" name="interests" onChange={this.props.onChange} />

          <Link to="/"><input type="submit" className="button" value="Register" /></Link>
        </form>
      </div >
    )
  }
}

export default Register;