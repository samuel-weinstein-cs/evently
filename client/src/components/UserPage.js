import React from 'react';
function UserPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Users</h3>
        <div className="users-wrapper">

          {props.users.map(user => (
            <div className="user">
              <p>{user.username}</p>
              <p>{user.description}</p>
            </div>
          ))
          }
        </div>
      </main>
    </div>
  )
}

export default UserPage;