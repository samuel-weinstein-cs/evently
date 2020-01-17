import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <div className="header">
      <Link to="/" ><h1>Evently</h1></Link>

      <div>
        <p>Login | Register</p>
      </div>
    </div>
  )
}


export default Header;