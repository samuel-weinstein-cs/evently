import React, {Component} from "react";
import axios from "axios"
import EventPage from "./EventPage"

class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  

  

    
  

  

 async componentDidMount  () {
    let event = await axios(`http://localhost:3000/event/${this.props.match.params.eventId}`);
   console.log(event)
   let eventDat = event.data.event
    this.setState({
      title: eventDat.title,
      date: eventDat.date,
      category: eventDat.category,
      image_url: eventDat.image_url,
      startTime: eventDat.startTime,
      endTime: eventDat.endTime,
      description: eventDat.description,
      entry: eventDat.entry,
      location: eventDat.location


      
    })
    
  }

  
  render() {
  console.log(this.props.match.params.eventId)
  return (
    <div>
      <h1>{this.state.title}</h1>
      <p>{this.state.date}</p>
      <p> Category: {this.state.category}</p>
      <img src={this.state.image_url} />
      <p>Description : <br />{this.state.description} </p>
      <p>Entry Fee: {this.state.entry}</p>
      <p>Location: {this.state.location}</p>
      <p>Starts at {this.state.startTime}</p>
      <p>Ends at {this.state.endTime}</p>

      

    </div>
  )

}


}

export default SingleEvent; 
