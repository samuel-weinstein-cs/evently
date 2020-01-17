import React from 'react';
import { Link } from 'react-router-dom';

function EventPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Events</h3>
        <div className="events-wrapper">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>Time: {event.time}</p>
              <img src={event.image_url} />
            </div>
          ))
          }
        </div>
        <Link to="/CreateEvent" type="submit" ><h1>Create Event</h1></Link>
      </main>
    </div>
  )
}

export default EventPage;