import React from 'react';
function EventPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Events</h3>
        <div className="events-wrapper">
          {props.events.map(event => (
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
      </main>
    </div>
  )
}

export default EventPage;