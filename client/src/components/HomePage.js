import React from 'react';
import { Link } from 'react-router-dom';
import { FaHamburger, FaLaptop, FaBookOpen, FaDog, FaMusic, FaGamepad, FaHeartbeat, FaPlane, FaPaintBrush } from "react-icons/fa";
import { GiBallerinaShoes, GiMaterialsScience, GiRaceCar }
  from "react-icons/gi"
import EventPage from './EventPage.js';
function HomePage(props) {
  return (
    <div>
      <span>Find your next event here!</span>
      {!props.currentUser && <p>welcome {props.currentUser}</p>}
      <nav>
        <Link to="/user"><p>View Users</p></Link>
        <Link to="/event"><p>View Events</p></Link></nav>
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
        <h2>Outdoors and Adventure</h2>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>Start Time: {event.startTime}</p>
            </div>
          ))
          }
        </div>
        <h2>Women in Tech</h2>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>Start Time: {event.startTime}</p>
            </div>
          ))
          }
        </div>
        <h2>Food Drives</h2>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>Start Time: {event.startTime}</p>
            </div>
          ))
          }
        </div>
        <h2>Entrepreneurship</h2>
        <div className="events-by-category">
          {props.eventApiDataLoaded && props.events.events.map(event => (
            <div className="event">
              <p>Title: {event.title}</p>
              <img src={event.image_url} alt='event' />
              <p>Date: {event.date}</p>
              <p>Location:{event.location} </p>
              <p>Start Time: {event.startTime}</p>
            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}


export default HomePage;