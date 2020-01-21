import React, { Component } from "react"
import axios from "axios";


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount = async () => {
    let user = await axios(`http://localhost:3000/user/${this.props.match.params.userId}`)

    let userInfo = user.data.user
    console.log(userInfo)
    this.setState({
      username: userInfo.username,
      image_url: userInfo.image_url,
      description: userInfo.description,
      interests: userInfo.interests,
      join_date: userInfo.join_date

    })
  }





  render() {


    return (
      <div className="user">
        <div className="userProf">
        <h1>{this.state.username}</h1>
        <img className="centImg" src={this.state.image_url} alt='user' />
        <h2>Intersts: {this.state.interests}</h2>
        <h3>A little about me: <br /> {this.state.description}</h3>
          <p>Member Since: {this.state.join_date}</p>
          </div>
      </div>
    )
  }
}

export default UserProfile;