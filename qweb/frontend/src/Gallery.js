import './Gallery.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import axios from 'axios';


export default class Gallery extends React.Component{

  state = {
    yearsButtons: [],
    allEventsButtons: [],
    allEvents: [],
    allYears: [],
    allArt: [],
    selectedYear: 0,
    selectedEvent: "",
    selectedYearButton: null,
    selectedEventButton: null,
    bannerText: "",
    artTitle: "",
    artistName: "",
    artMediums: "",
  }

  handleYearButtonClick = (year) => {
    this.setState({ selectedYearButton: year, selectedYear : year });
  };

  handleEventButtonClick = (event) => {
    this.setState({ selectedEventButton: event });
  };

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
        this.setState({ allYears : years });
        const yearsButtons = years.map(i => {
          return <button class={`years-button ${this.state.selectedYear === i ? 'focused' : ''}`} onClick={() => this.handleYearButtonClick(i)}><div class="years-text">{i}</div></button>
        });
        this.setState({ yearsButtons });;
        const allEventsButtons = events.map(i => {
          return <button class="events-button" key={i.Year} onClick={() => this.setState({bannerText : i.Desc, selectedEvent : i.Name})}><div class="events-text">{i.Name}</div></button>
        });
        this.setState({ allEventsButtons });
      });
    axios.get('http://localhost:8000/api/artwork')
      .then(res => {
        this.setState({ allArt : res.data })
      })
  }

  render(){
    return(
      <div className="Gallery">
        <Header/>
        <main class="frame-main">
          <h1>Gallery.</h1>
          <div class="years-container">
            {this.state.yearsButtons}
          </div>       

          <hr class="solid"></hr>

          <div class="years-container">
            {this.state.allEventsButtons.map(event => {if(event.key == this.state.selectedYear){return event}})}
          </div>

          <br/>

          <div class="event-desc-container">
            <p class="event-desc">
              {this.state.bannerText}
            </p>
          </div>
          
          <br/>

          <div class="black-box">
            <b class="title">{this.state.artTitle}</b>
            <p class="artist">{this.state.artistName}</p>
            <p class="mediums">{this.state.artMediums}</p>
          </div>

          {this.state.allArt.map(art => {
            if (art.Event == this.state.selectedEvent){
              const imagePath = `./ArtFolder/${art.Photo}`;
              console.log(imagePath)
              return (
                <img 
                  src={require(`./ArtFolder/images.jpg`)} 
                  alt={art.Name}
                  onClick={() => this.setState({artistName :  art.Artist, artTitle : art.Name, artMediums : art.Mediums})}
                />
              )
            }
          })};

        </main>
        <Footer/>
      </div>
    )
  }
  
}