import React, { Component } from "react"
import axios from "axios";
import { Link } from "react-router-dom"


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
          <div className="profilePic">
        <h1>{this.state.username}</h1>
            <img className="userImg" src={this.state.image_url} alt='user' />
          </div>
          <div className="profileInfo">
          <h3>A little about me: <br /> {this.state.description}</h3>
        <h2>Interests: {this.state.interests}</h2>
       
            <p>Member Since: {this.state.join_date}</p>
            </div>
        </div>
        <Link to="/event">Back To Explore Events Page</Link>
      </div>
    )
  }
}

export default UserProfile;