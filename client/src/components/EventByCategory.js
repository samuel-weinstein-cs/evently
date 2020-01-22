import React, { Component } from 'react';
import { getByCategory } from '../services/api_helper';
import { Link } from "react-router-dom"


class EventByCategory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      events: [],
      apiDataLoaded: false,
      category: ''
    }
  }
  async componentDidMount() {
    const category = `${this.props.match.params.category}`
    const categroryCapitalized = category.charAt(0).toUpperCase() + category.slice(1)
    const resp = await getByCategory(categroryCapitalized);
    this.setState({
      events: resp.data,
      apiDataLoaded: true,
      category: categroryCapitalized
    })
  }
  render() {
    return (
      <div className="cent">
        <h1>Upcoming {this.state.category} Events</h1>
        <div className="events-wrapper">
          
          <br/>
          {this.state.apiDataLoaded && this.state.events.map(event => (
            <Link to={`/event/${event.id}`} id={event.id}  >
            <div className="event">
              <p> {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p> {event.date}</p>
              <p>{event.location} </p>
              {/* <p>What to Expect: {event.description}</p>
              <p>Start Time: {event.startTime}</p>
              <p>End Time: {event.endTime}</p> */}

              </div>
              </Link>
          ))
          }
        </div>
      </div>
    )
  }
}
export default EventByCategory;