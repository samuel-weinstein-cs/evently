import React, { Component } from 'react'
import axios from "axios"

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {

      event: {
        title: '',
        date: '',
        location: '',
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

  submitEvent = async (event) => {
    try {
      axios.post('http://localhost:3000/event', this.state.event)
    }
    catch (e) {
      console.log("Something went wrong. Please test connection and try again!")
    }
  }


  render() {
    console.log(this.state.event)
    return (
      <div>
        <form onSubmit={this.submitEvent}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Event Name"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="category"
            value={this.state.category}
            placeholder="Category of Event"
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
          <input
            type="text"
            name="image_url"
            value={this.state.image_url}
            placeholder="Image for Event"
            onChange={this.handleChange}
          />
          <input type="Submit" value="Create Your Event!" readOnly={true} />



        </form>

      </div>)
  }
}

export default CreateEvent;