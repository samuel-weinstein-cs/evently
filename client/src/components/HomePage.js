import React from 'react';
import { Link } from 'react-router-dom';
function HomePage(props) {
  return (
    <div>
      <span>Find your next event here!</span>
      <Link to="/user"><p>View Users</p></Link>
      <Link to="/event"><p>View Events</p></Link>
    </div >
  )
}


export default HomePage;