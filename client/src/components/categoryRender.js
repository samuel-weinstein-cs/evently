import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getByCategory } from '../services/api_helper';
class CategoryRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      apiDataLoaded: false
    }
  }
  async componentDidMount() {
    const resp = await getByCategory(`${this.props.category}`);
    this.setState({
      events: resp.data,
      apiDataLoaded: true,
    })
    console.log(this.state.events)
  }
  render() {
    return (
      <div>
        <Link to={`/events/${this.props.category}`} category={this.props.category} className="home-heading"  ><h2>{this.props.category}</h2></Link>
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
      </div >
    )
  }
}
export default CategoryRender;