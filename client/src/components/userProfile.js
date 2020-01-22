import React, { Component } from "react"
import axios from "axios";
import {getAttendUser} from "../services/api_helper";
import {Link} from "react-router-dom"


class UserProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attending: null
    }
  }

  componentDidMount = async () => {
    const userId = this.props.match.params.userId;
    const user = await axios(`http://localhost:3000/user/${userId}`);
    const attending = await getAttendUser(userId);
    console.log(attending.data.events);
    const userInfo = user.data.user;
    console.log(userInfo);
    this.setState({
      attending: attending.data.events,
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
            <h2>A little about me:</h2>
            <p>{this.state.description}</p>
            <h2>Interests:</h2>
            <p>{this.state.interests}</p>
            <p>Member Since: {this.state.join_date}</p>
            <h2>Attending Events:</h2>
            {this.state.attending&&this.state.attending.map((event, key)=> (
              <Link to={`/event/${event.id}`} key={key}><p>{event.title}</p></Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile;
