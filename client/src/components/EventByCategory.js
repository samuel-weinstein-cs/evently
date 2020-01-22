import React, { Component } from 'react';
import { getByCategory } from '../services/api_helper';
import { Link } from 'react-router-dom'


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
      <div>
        <div className="events-wrapper">
          <h1>Upcoming {this.state.category} Events</h1>

          <div className="events-by-category">
            {this.state.apiDataLoaded && this.state.events.map(event => (
              <div className="event">
                <Link to={`/event/${event.id}`} id={event.id}  >
                  <div className="title">{event.title}</div>
                  <p className="details">{event.tagline}</p>
                  <img src={event.image_url} alt='event' />
                  <p className="details">When:{event.date}</p>
                </Link>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default EventByCategory;