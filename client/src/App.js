import React, { Component } from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./components/HomePage"

import UserPage from "./components/UserPage"
import EventPage from "./components/EventPage"


import { Route, Link } from "react-router-dom"

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Maleeha",
          description: "the awesomest person ever",
          password: "1234"
        },
        {
          username: "Richard",
          description: "the weirdo 1",

          password: "1234"
        },
        {
          username: "Sam",
          description: "weirdo 2",

          password: "1234"
        }
      ],
      events: [
        {
          title: "Presentation for p3",
          date: "January, 23, 2020",
          location: "GA, NY Campus",
          time: "11am",
          image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"

        },
        {
          title: "Presentation for p3",
          date: "January, 23, 2020",
          location: "GA, NY Campus",
          time: "11am",
          image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"
        },
        {
          title: "Presentation for p3",
          date: "January, 23, 2020",
          location: "GA, NY Campus",
          time: "11am",
          image_url: "https://si.wsj.net/public/resources/images/MK-CG029_MBASTA_P_20130904152503.jpg"
        }

      ]
    }
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
              />
            )}
          />
          <Link to="/user"><p>View Users</p></Link>
          <Route
            exact path="/event"
            render={() => (
              <EventPage
                events={this.state.events}
              />
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
