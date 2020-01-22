import React, { Component } from 'react'
import axios from "axios"
import { createEvent } from "../services/api_helper.js"

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      event: {
        title: '',
        date: '',
        location: '',
        entry: '',
        description: '',
        startTime: '',
        endTime: '',
        image_url: '',
        category: ''
      }
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      event:
      {
        ...this.state.event,
        [name]: value
      }
    })
  }

  submitEvent = async (e, newEvent) => {
    e.preventDefault();
    const event = createEvent(newEvent)



  }
  render() {
    console.log(this.state.event)
    return (
      <div className="form" >
        <form className="createForm" onSubmit={(e) => this.submitEvent(e, this.state.event)}>

          <label htmlFor="title">Name of event </label>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Event Name"
            onChange={this.handleChange}
          />
          <label htmlFor="category">Category for event </label>
          <input
            type="text"
            name="category"
            value={this.state.category}
            placeholder="Category of Event"
            onChange={this.handleChange}
          />
          <label htmlFor="entry">Any entry fees?</label>
          <input
            type="text"
            name="entry"
            value={this.state.entry}
            placeholder="Any entry fees?"
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input

            type="text"
            name="description"
            value={this.state.description}
            placeholder="Event Details"
            onChange={this.handleChange}
          />
          <label htmlFor="date">Date of event</label>
          <input
            type="text"
            name="date"
            value={this.state.date}
            placeholder="Date of Event"
            onChange={this.handleChange}
          />
          <label htmlFor="location">Location for event</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            placeholder="Address/Location"
            onChange={this.handleChange}
          />
          <label htmlFor="startTime">State Time for event</label>
          <input
            type="text"
            name="startTime"
            value={this.state.startTime}
            placeholder="Start Time"
            onChange={this.handleChange}
          />
          <label htmlFor="endTime">End time for event</label>
          <input
            type="text"
            name="endTime"
            value={this.state.endTime}
            placeholder="End Time"
            onChange={this.handleChange}
          />
          <label htmlFor="image_url">Put image URL here</label>
          <input
            type="text"
            name="image_url"
            value={this.state.image_url}
            placeholder="Image URL to be displayed for Event"
            onChange={this.handleChange}
          />
          <input type="Submit" value="Create Your Event!" readOnly={true} />



        </form>

      </div>)
  }
}

export default CreateEvent;