import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <div className="header">
      <Link to="/" ><h1>Evently</h1></Link>

      <div>
        <Link to="/login">
          {props.user ?
            <div><p>Hello, {props.user.username} <button onClick={props.handleLogout}>Logout</button></p></div> :
            <p> Login | Register</p>
          }
        </Link>
      </div>
    </div >
  )
}


export default Header;
