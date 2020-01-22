import React, { Component } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { deleteEvent, updateEvent, attendEvent, deleteAttendEvent, getAttendEvent } from "../services/api_helper";

class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      attending: false,
      users: null,
      changes: false

    }
  }

  async componentDidMount() {
    const event = await axios(`http://localhost:3000/event/${this.props.match.params.eventId}`);

    //console.log(event)
    const eventDat = event.data.event
    const users = await getAttendEvent(eventDat.id);
    let attending = false;
    const usersList = users.data.users;
    for (const user in usersList) {
      if (this.props.currentUser && (this.props.currentUser.id === usersList[user].id)) {
        attending = true;
        break;
      }
    }
    //console.log(attending);
    //console.log(users);
    this.setState({
      attending,
      users: users.data.users,
      title: eventDat.title,
      date: eventDat.date,
      category: eventDat.category,
      image_url: eventDat.image_url,
      startTime: eventDat.startTime,
      endTime: eventDat.endTime,
      description: eventDat.description,
      entry: eventDat.entry,
      location: eventDat.location,
      id: eventDat.id,
    })

  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      [name]: value

    })
  }
  handleDelete = async (e) => {
    e.preventDefault();
    deleteEvent(this.state.id)
  }

  handleUpdate = async (e, event) => {
    e.preventDefault();
    updateEvent(event.id, event)
    this.setState({
      changes: false
    })
  }

  handleAttend = async () => {
    if (this.state.attending) {
      const userList = this.state.users.filter(user => (user.id !== this.props.currentUser.id))
      this.setState({
        attending: false,
        users: userList
      })
      await deleteAttendEvent(this.state.id);
    } else {
      this.setState({
        attending: true,
        users: [...this.state.users, this.props.currentUser]
      })
      await attendEvent(this.state.id);
    }
  }


  needsUpdate = () => {
    this.setState({
      changes: true
    })
  }

  handleHide = () => {
    this.setState({
      changes: false
    })
  }


  render() {

    return (
      <div>

        <div className="singleEv">
          <h1>{this.state.title}</h1>
          <p>{this.state.date}</p>
          <p> <span className="tags">Category: </span> {this.state.category}</p>
          <div className="sizing">
            <br />
            <img className="centImg" src={this.state.image_url} />
            <br />
          </div>
          <p> <span className="tags"> Description: </span>  {this.state.description} </p>
          <br />
          <p><span className="tags"> Entry Fee: </span>  {this.state.entry}</p>
          <p>
            <span className="tags"> Location: </span>   {this.state.location}</p>
          <p> <span className="tags"> Starts at </span>   {this.state.startTime}</p>
          <p> <span className="tags"> Ends at </span>   {this.state.endTime}</p>


          {this.props.currentUser && <div className="attendBut">
            <button className="attendBut" onClick={this.handleAttend}>
              {this.state.attending ?
                'Un-Attend Event' :
                'Attend Event'
              }
            </button>
          </div>}

          <h2>Members Attending</h2>
          <div className="attend">
            {this.state.users ?
              <div className="attendPic">

                {this.state.users && this.state.users.map((user, key) => (
                  <div className="attendProf">
                    <Link to={`/user/${user.id}`} key={key}>{user.username}
                      <br />
                      <img src={user.image_url} alt="profile pic" />
                    </Link>
                  </div>
                ))}
              </div> :
              <span>No Memebers Attending At the Moment</span>
            }
          </div>
          {this.props.currentUser && <div>
            {this.state.changes === false ?

              <button onClick={this.needsUpdate}>Update</button>

              :

              <form onSubmit={(e) => this.handleUpdate(e, this.state)}>
                <button>Hide</button>
                <br />
                <input type="text" name="title" value={this.state.title} placeholder="Name of Event" onChange={this.handleChange} />

                <div className="submitForm">

                  <input
                    type="text"
                    name="category"
                    value={this.state.category}
                    placeholder="Category of Event"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="entry"
                    value={this.state.entry}
                    placeholder="Any entry fees?"
                    onChange={this.handleChange}
                  />

                  <input

                    type="text"
                    name="description"
                    value={this.state.description}
                    placeholder="Event Details"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="date"
                    value={this.state.date}
                    placeholder="Date of Event"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    placeholder="Address/Location"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="startTime"
                    value={this.state.startTime}
                    placeholder="Start Time"
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="endTime"
                    value={this.state.endTime}
                    placeholder="End Time"
                    onChange={this.handleChange}
                  />
                  <input type="submit" />

                </div>

              </form>
            }

            <button onClick={(e) => this.handleDelete(e)}>
              Delete
          </button>
          </div>}
          <br />

          <Link to="/event">Back to Explore Events Page</Link>
        </div>



      </div>
    )
  }



}

export default SingleEvent;
