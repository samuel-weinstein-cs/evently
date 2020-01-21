import React from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaLaptop, FaBookOpen, FaDog, FaMusic, FaGamepad, FaHeartbeat, FaPlane, FaPaintBrush } from "react-icons/fa";
import { GiBallerinaShoes, GiMaterialsScience, GiRaceCar }
  from "react-icons/gi"



function HomePage(props) {

  return (
    <div className="home-page">
      <h2>{props.currentUser && `Hello, ${props.currentUser.username}!`} Find your next event here!</h2>
      <nav>
        <Link to="/event" className="createButton" type="submit" ><p>Explore Events</p></Link>
        <Link to="/createevent" className="createButton" type="submit" ><p>Create New Event</p></Link>
      </nav>
      <div className="categoriesContainer">
        <span>Categories</span>
        <div className="categories">
          <div className="row">
            <Link to="/events/food"
              category="food"
              className="categoryIcons">
              <FaHamburger className="icon" />
              Food
            </Link>
            <Link to="/events/technology"
              category="Technology"
              className="categoryIcons">
              <FaLaptop className="icon" />
              Technology
            </Link>
            <Link to="/events/education"
              category="Education"
              className="categoryIcons">
              <FaBookOpen className="icon" />
              Education
            </Link>
            <Link to="/events/dance"
              category="dance"
              className="categoryIcons">
              <GiBallerinaShoes className="icon" />
              Dance
            </Link>

          </div>
          <div className="row">
            <Link to="/events/science"
              category="Science"
              className="categoryIcons">
              <GiMaterialsScience className="icon" />
              Science
            </Link>
            <Link to="/events/animals"
              category="Animals"
              className="categoryIcons">
              <FaDog className="icon" />
              Animals
            </Link>
            <Link to="/events/music"
              category="Music"
              className="categoryIcons">
              <FaMusic className="icon" />
              Music
            </Link>
            <Link to="/events/cars"
              category="Cars"
              className="categoryIcons">
              <GiRaceCar className="icon" />
              Cars
            </Link>
          </div>
          <div className="row">
            <Link to="/events/gaming"
              category="gaming"
              className="categoryIcons">
              <FaGamepad className="icon" />
              Gaming
            </Link>
            <Link to="/events/travel"
              category="Travel"
              className="categoryIcons">
              <FaPlane className="icon" />
              Travel
            </Link>
            <Link to="/events/healthandfitness"
              category="health and fitness"
              className="categoryIcons">
              <FaHeartbeat className="icon" />
              Health and Fitness
            </Link>
            <Link to="/art"
              category="Art"
              className="categoryIcons">
              <FaPaintBrush className="icon" />
              Art
            </Link>
          </div>
        </div>
      </div>

      <div className="upcoming-events">
        <span>Upcoming Events</span>

        <Link to={`/events/gaming`} category='Gaming' className="home-heading"  ><h2>Gaming</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
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
        <Link to={`/events/womenintech`} category='WomenInTech' className="home-heading"  ><h2>Women In Tech</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
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

        <Link to={`/events/business`} category='Business'  ><h2>Business</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
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
        <Link to={`/events/school`} category='School'><h2>School</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
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


export default HomePage;