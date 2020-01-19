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

import { getUsers, getEvents } from "./services/api_helper"
import { Route, Link } from "react-router-dom"

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userApiDataLoaded: false,
      eventApiDataLoaded: false,
      events: []
    }
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
    console.log(this.state.users)
  }
  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="App" >
        <Header />
        <main>
          <Route
            exact path="/"
            render={() => (
              <HomePage />
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
                onChange={this.onChange} />
            )}
          />
          <Route
            exact path="/register"
            render={() => (
              <Register
                onChange={this.onChange} />
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
