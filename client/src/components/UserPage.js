import React from 'react';
function UserPage(props) {
  return (
    <div>
      <main>
        <h3>Display all Users</h3>
        <div className="users-wrapper">
          {props.userApiDataLoaded && props.users.users.map(user => (
            <div className="user">
              <img src={user.image_url} />
              <div>
                <h1>Name: {user.username}</h1>
                <p>Bio: {user.description}</p>
                <p> Interest: {user.interests}</p>
                <p> Joining Date: {user.join_date}</p>
              </div>

            </div>
          ))
          }
        </div>
      </main>
    </div >
  )
}

export default UserPage;