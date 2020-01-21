import React, { Component } from "react";
import axios from "axios"
import { deleteEvent, updateEvent, AttendEvent, deleteAttendEvent, getAttendEvent } from "../services/api_helper"

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
    let event = await axios(`http://localhost:3000/event/${this.props.match.params.eventId}`);
    console.log(event)
    let eventDat = event.data.event
    this.setState({

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
    console.log(this.state)

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
    if(this.state.attending){
      this.setState({
        attending: false
      })

    } else {
      this.setState({
        attending: true
      })
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
            <img className="centImg" src={this.state.image_url} />
            </div>
          <p> <span className="tags"> Description : </span>  <br />{this.state.description} </p>
          <p><span className="tags"> Entry Fee: </span> {this.state.entry}</p>
          <p>
            <span className="tags"> Location: </span>  {this.state.location}</p>
          <p> <span className="tags"> Starts at </span>  {this.state.startTime}</p>
          <p> <span className="tags"> Ends at </span> {this.state.endTime}</p>


          <div className="attendBut">
              <button className="attendBut" onClick={this.handleAttend}>
                {this.state.attending === false?
                  'Attend Event':
                  'Un-Attend Event'
                }
              </button>
          </div>

          <h2>Members Attending</h2>
          <div className="attend">
            {this.state.users ?
              :
              <h2>No Memebers Attending At the Moment</h2>
            }
          </div>

          {this.state.changes === false ?

            <button onClick={this.needsUpdate}>Need to make any changes?</button>

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
            Delete Event
          </button>

        </div>


      </div>
    )
  }



}

export default SingleEvent;
