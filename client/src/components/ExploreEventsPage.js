import React from 'react';
import { Link } from 'react-router-dom';

function ExploreEventsPage(props) {
  return (
    <div>
      <main>
        <h3>Upcoming Events</h3>
        <div className="events-wrapper">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>What to Expect: {event.description}</p>
              <p>Start Time: {event.startTime}</p>
              <p>End Time: {event.endTime}</p>

              <Link to={`/event/${event.id}`} id={event.id}  >Click for details</Link>
            </div>
          ))
          }
        </div>
        <Link to="/CreateEvent" type="submit" ><input type="submit" value="Create New Event" /></Link>
      </main>
    </div>
  )
}

export default ExploreEventsPage;