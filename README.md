# Evently
![Cheetah](https://i.imgflip.com/3mb4ww.jpg)
## Overview:
Evently is a platform for creating, finding and sharing events in your local communities in various categories. People can use Evently to find new events happening around them, create events and meet people who have similar passions.
### Team Members
- Richard Moebus
- Sam Weinstein - Git Царь
- Maleeha Hasan
### Team Expectations
- Functional Code
- Punctuality
- Interactive, Attractive UI
- Overt Communication
## MVP
### Goals
- User Login
- User Registration 
- User can see events without logging in
- User can an organize an event
- Only the Organizer can modify or delete an event
- Users can “attend” an event
- Users can browse events by category 
- Users can view upcoming events and past events
### Libraries
- React
- React Router
- React Axios
- Font Awesome
- Express
- Express Router
- Sequelize
- Postgres
- Cors
- Body Parser
- bCrypt
- JWT Web Token
- Morgan
- Nodemon
### Client
#### Wireframes
##### Homepage
![homepage](https://i.imgur.com/wwwJVle.png)
##### Explore Page
![explore main](https://i.imgur.com/16SPqv4.png)
##### Event Page
![event](https://i.imgur.com/x2pIq0B.png)
##### Profile Page
![profile](https://i.imgur.com/gI1t5qk.png)
##### Login and Register Page
![login and register](https://i.imgur.com/mcyLlNq.png)
#### Component Hierarchy

```
src
|_Assets/
  |_fonts
  |_graphics
  |_images
  |_mockups
|_components
  |_Header
  |_Footer
  |_Login
  |_Register
  |_Navigation
  |_Home
  |_User
  |_Event
  |_Explore
|_services
  |_api_helper
```
### Server
#### ERD Model
![ERD](https://lh3.googleusercontent.com/TCKIw7TWDiI2hVIVxWmEnjoZWRXXh3DMBKmkgMGWcHttpXFCOJ7O7KP3o9DT1XUrhkBmWagKyZjIm3o0y1Hj=w1576-h1608)
#### Data Heirarchy
evently_db
- user
- events
- attending
#### Routes
- /user
- /user/:id
- /user/:id/attending
- /user/:id/events
- /event
- /event/:id
- /event/category
- /event/:id/attending

# Links
- [Trello](https://trello.com/b/mBY0u4j5/evently)
- [Google Docs](https://docs.google.com/document/d/1_Kek648eAeQagjhVq5cKR-PN6utqUd6hd9Xn62geteg/edit?usp=sharing)
