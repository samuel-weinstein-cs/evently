import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"
import { getUsers, getEvents } from "./services/api_helper"
import UserPage from "./components/UserPage"
import EventPage from "./components/EventPage"
import CreateEvent from './components/CreateEvent'


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
          <Link to="/user"><p>View Users</p></Link>
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
              <CreateEvent />
            )}
          />
          <Link to="/event"><p>View Events</p></Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
