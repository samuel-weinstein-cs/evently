import React, { Component } from "react";
import axios from "axios"
import EventPage from "./EventPage"
import { deleteEvent, updateEvent } from "../services/api_helper"

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


  handleDelete = async (e, eventId) => {
    e.preventDefault();
    deleteEvent(eventId)
  }

  handleUpdate = async (e, event) => {
    e.preventDefault();
    updateEvent(event.id, event)
    this.setState({
      changes: false
    })
  }

  handleAttend = (e) => {
    this.setState({
      attending: true
    })
  }

  handleNotAttend = (e) => {
    this.setState({
      attending: false
    })
  }

  needsUpdate = (e) => {
    this.setState({
      changes: true
    })
  }

  handleHide = (e) => {
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
            {this.state.attending === false
              ?
              <button className="attendBut" onClick={this.handleAttend}>Attending!</button>
              :
              <button className="attendBut" onClick={this.handleNotAttend}> Not attending </button>
            }
          </div>

          <h2>Members Atttending</h2>
          <div className="attend">
            {this.state.users === null ?
              <h2>No Memebers Attending At the Moment</h2>
              :
              <h2>RICHARD</h2>}
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

          <form onSubmit={(e) => this.handleDelete(e, this.state.id)}>
            <input type="submit" value="Delete Event" />
          </form>

        </div>


      </div>
    )
  }


  render() {
    console.log(this.props.match.params.eventId)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.date}</p>
        <p> Category: {this.state.category}</p>
        <img src={this.state.image_url} alt="event" />
        <p>Description : <br />{this.state.description} </p>
        <p>Entry Fee: {this.state.entry}</p>
        <p>Location: {this.state.location}</p>
        <p>Starts at {this.state.startTime}</p>
        <p>Ends at {this.state.endTime}</p>
      </div>
    )
  }
}

export default SingleEvent; 
