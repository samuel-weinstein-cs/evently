import React, { Component } from "react";
import axios from "axios"
import EventPage from "./EventPage"
import { deleteEvent, updateEvent } from "../services/api_helper"


class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {


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
        id: eventDat.id
      


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
        
    })
  }



  render() {
    
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.date}</p>
        <p> Category: {this.state.category}</p>
        <img src={this.state.image_url} />
        <p>Description : <br />{this.state.description} </p>
        <p>Entry Fee: {this.state.entry}</p>
        <p>Location: {this.state.location}</p>
        <p>Starts at {this.state.startTime}</p>
        <p>Ends at {this.state.endTime}</p>

        <form onSubmit={(e) => this.handleDelete(e, this.state.id)}>
          <input type="submit" value="Delete Event" />
        </form>

        <form onSubmit={(e) => this.handleUpdate(e, this.state)}>
          <input type="text" name="title" value={this.state.title} placeholder="Name of Event" onChange={this.handleChange} />
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
          <input type="submit"/>
        </form>

      </div>
    )

  }


}

export default SingleEvent; 
