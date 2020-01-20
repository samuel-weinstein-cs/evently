import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import Login from "./components/Login"
import UserPage from "./components/UserPage"
import EventPage from "./components/EventPage"
import CreateEvent from './components/CreateEvent'
import Register from './components/Register'
import SingleEvent from "./components/singleEvent"
import UserProfile from "./components/userProfile"
import { loginUser, registerUser, verifyUser } from './services/api_helper';


import { getUsers, getEvents } from "./services/api_helper"
import { Route } from "react-router-dom"

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userApiDataLoaded: false,
      eventApiDataLoaded: false,
      events: [],
      currentUser: null,
      errorText: ''
    }
  }


  handleLogin = async (e, loginData) => {
    e.preventDefault();
    console.log("help me");
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser });

  }
  //register
  handleRegister = async (e, registerData) => {
    e.preventDefault();
    console.log(registerData)
    if (!registerData.username || !registerData.password) {
      this.setState({
        errorText: "You must supply a username AND a password you jerk! "
      })
    }
    else {
      const currentUser = await registerUser(registerData);
      this.setState({
        currentUser,
        errorText: ''
      })
    }
  }
  //verify
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
    }
  }

  //Logout
  handleLogout = () => {

    this.setState({
      currentUser: null,

    })
    localStorage.removeItem('authToken');
  }



  async componentDidMount() {
    const userData = await getUsers();
    const eventData = await getEvents();
    this.setState({
      users: userData.data,
      userApiDataLoaded: true,
      events: eventData.data,
      eventApiDataLoaded: true

    })
  }

  render() {
    return (
      <div className="App" >
        <Header user={this.state.currentUser} handleLogout={this.handleLogout}/>
        <main>
          <Route
            exact path="/"
            render={() => (
              <HomePage
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact path="/user"
            render={() => (
              <UserPage
                users={this.state.users}
                userApiDataLoaded={this.state.userApiDataLoaded}
              />
            )}
          />

          <Route
            exact path="/event"
            render={() => (
              <EventPage
                events={this.state.events}
                eventApiDataLoaded={this.state.eventApiDataLoaded}
              />
            )}
          />
          <Route
            exact path="/createEvent"
            render={() => (
              <CreateEvent
                onChange={this.onChange} />
            )}
          />
          <Route
            exact path="/login"
            render={() => (
              <Login

                handleLogin={this.handleLogin}
                currentUser={this.state.currentUser}
              />
            )}
          />
          <Route
            exact path="/register"
            render={() => (
              <Register

                handleRegister={this.handleRegister}
                currentUser={this.state.currentUser}

              />
            )}
          />
          <Route 
            exact path={`/event/:eventId`}
            render={(props) =>
              <SingleEvent  {...props} component={EventPage} />} />
            
          <Route 
            exact path={`/user/:userId`} render={(props) => <UserProfile  {...props} component={UserPage}/>} />
        </main>
        
        <Footer />
      </div>
    );
  }
}

export default App;
