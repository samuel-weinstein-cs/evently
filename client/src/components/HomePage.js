import React from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaLaptop, FaBookOpen, FaDog, FaMusic, FaGamepad, FaHeartbeat, FaPlane, FaPaintBrush } from "react-icons/fa";
import { GiBallerinaShoes, GiMaterialsScience, GiRaceCar }
  from "react-icons/gi"
import { getByCategory } from '../services/api_helper';
import EventPage from './EventPage.js';


function HomePage(props) {
  const a = getByCategory("Gaming");
  return (
    <div>
      <span>Find your next event here!</span>
      {props.currentUser && <p>welcome {props.currentUser}</p>}

      <Link to="/CreateEvent" className="createButton" type="submit" ><h2>Create Event</h2></Link>
      <div className="categoriesContainer">
        <span>Categories</span>
        <div className="categories">
          <div className="row">
            <Link to="/"
              className="categoryIcons">
              <FaHamburger className="icon" />
              Food
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaLaptop className="icon" />
              Technology
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaBookOpen className="icon" />
              Education
            </Link>
            <Link to="/"
              className="categoryIcons">
              <GiBallerinaShoes className="icon" />
              Dance
            </Link>

          </div>
          <div className="row">
            <Link to="/"
              className="categoryIcons">
              <GiMaterialsScience className="icon" />
              Science
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaDog className="icon" />
              Animals
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaMusic className="icon" />
              Music
            </Link>
            <Link to="/"
              className="categoryIcons">
              <GiRaceCar className="icon" />
              Cars
            </Link>
          </div>
          <div className="row">
            <Link to="/"
              className="categoryIcons">
              <FaGamepad className="icon" />
              Gaming
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaPlane className="icon" />
              Travel
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaHeartbeat className="icon" />
              Health and Fitness
            </Link>
            <Link to="/"
              className="categoryIcons">
              <FaPaintBrush className="icon" />
              Art
            </Link>
          </div>
        </div>
      </div>

      <div className="categoriesContainer">
        <span>Upcoming Events</span>

        <Link to={`/events/gaming`} category='Gaming'  ><h2>Gaming</h2></Link>



        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>{event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>{event.tagline} </p>
              <p>Date: {event.date}</p>
            </div>
          ))
          }
        </div>

        <Link to={`/events/business`} category='Business'  ><h2>Business</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>{event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>{event.tagline} </p>
              <p>Date: {event.date}</p>

            </div>
          ))
          }
        </div>
        <Link to={`/events/school`} category='School'><h2>School</h2></Link>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>{event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>{event.tagline} </p>
              <p>Date: {event.date}</p>
            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}


export default HomePage;