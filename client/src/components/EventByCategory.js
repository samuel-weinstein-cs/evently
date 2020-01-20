import React, { Component } from 'react';
import { getByCategory } from '../services/api_helper';


class EventByCategory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      apiDataLoaded: false
    }
  }
  async componentDidMount() {
    const resp = await getByCategory(`Gaming`);
    this.setState({
      events: resp.data,
      apiDataLoaded: true
    })
  }
  render() {
    return (
      <div>
        <div className="events-wrapper">
          {this.state.apiDataLoaded && this.state.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>What to Expect: {event.description}</p>
              <p>Start Time: {event.startTime}</p>
              <p>End Time: {event.endTime}</p>

            </div>
          ))
          }
        </div>
      </div>
    )
  }
}
export default EventByCategory;