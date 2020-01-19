import React from 'react';
import {Link} from "react-router-dom"
function UserPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Users</h3>
        <div className="users-wrapper">
          
          {props.userApiDataLoaded && props.users.users.map(user => (
            <div className="user">
              <Link className="user" to={`/user/${user.id}`} id={user.id}>
              <img src={user.image_url} />
              <div>
                <h2>Name: {user.username}</h2>
                <p>Bio: {user.description}</p>
                <p> Interest: {user.interests}</p>
                <p> Joining Date: {user.join_date}</p>
               
              </div>
              </Link>
            </div>
          ))
          }
        </div>
      </main>
    </div >
  )
}

export default UserPage;