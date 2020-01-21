import React from 'react';
import { Link } from 'react-router-dom';

function ExploreEventsPage(props) {
  return (
    <div>
      <main className="explore-events">
        <span>Upcoming Events</span>
        <Link to="/CreateEvent" type="submit" ><input className="createButton" type="submit" value="Create New Event" /></Link>
        <div className="events-wrapper">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <div className="title">{event.title}</div>
              <p className="details">{event.tagline}</p>
              <img src={event.image_url} alt='event' />
              <p className="details">When:{event.date}</p>

              <Link to={`/event/${event.id}`} id={event.id}  >Click for details</Link>
            </div>
          ))
          }
        </div>

      </main>
    </div>
  )
}

export default ExploreEventsPage;