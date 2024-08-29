import './Gallery.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import axios from 'axios';


export default class Gallery extends React.Component{

  state = {
    yearsButtons: [],
    eventsButtons: [],
    allEvents: [],
    allYears: []
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/events')
      .then(res => {
        const events = res.data;
        this.setState({ allEvents: events});
        const years = [];
        events.map(i => {
          if (!years.includes(i.Year))
          years.push(i.Year);
        });
        this.setState({ allYears : years })
        const yearsButtons = years.map(i => {
          return <button class="years-button"><div class="years-text">{i}</div></button>
        })
        this.setState({ yearsButtons })
      });
  }

  render(){
    // console.log(this)
    return(
      <div className="Gallery">
        <Header/>
        <main class="frame-main">
          <h1>Gallery.</h1>

          {/* <div class="years-container">
            <button class="years-button"><div class="years-text">2023</div></button>
            <button class="years-button"><div class="years-text">2024</div></button>
          </div> */}

          <div class="years-container">
            {this.state.yearsButtons}
          </div>       

          <hr class="solid"></hr>

          <div class="years-container">
            <button class="events-button"><div class="events-text">Event Name</div></button>
            <button class="events-button"><div class="events-text">Event Name</div></button>
            <button class="events-button"><div class="events-text">Event Name</div></button>
            <button class="events-button"><div class="events-text">Event Name</div></button>
            <button class="events-button"><div class="events-text">Event Name</div></button>
            <button class="events-button"><div class="events-text">Event Name</div></button>
          </div>

          <br/>

          <div class="event-desc-container">
            <p class="event-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
          
          <br/>

          <div class="black-box">
            <div class="title-artist-name-container">
              <b class="title">“Title”</b>
              <p class="artist">Artist Name</p>
            </div>
            <div class="mediums-wrapper">
              <div class="mediums">Mediums</div>
            </div>
          </div>

        </main>
        <Footer/>
      </div>
    )
  }
  
}