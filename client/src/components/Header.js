import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <div className="header">
      <Link to="/" ><h1>Evently</h1></Link>

      <div>
        <Link to="/login">
          {props.user?
            <p onClick={props.handleLogout}>Hello, {props.user.username}</p>:
            <p> Login | Register</p>
          }
        </Link>
      </div>
    </div >
  )
}


export default Header;
