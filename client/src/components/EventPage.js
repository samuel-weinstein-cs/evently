import React from 'react';
function EventPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Events</h3>
        <div className="events-wrapper">

          {props.events.map(event => (
            <div className="event">
              <p>{event.title}</p>
              <p>{event.date}</p>
            </div>
          ))
          }
        </div>
      </main>
    </div>
  )
}

export default EventPage;