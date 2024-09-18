
import "./Home.css";
import "./main.css";
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import axios from 'axios';


export default class Home extends React.Component{

  state = {
    correctEvent: null,
    eventName:"",
    eventDescription:"",
    allArt: [],
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api/events')
      .then(res => {
        const events = res.data;
        const dates = [];

        events.map(i => {
          if (!dates.includes(i.Date))
            dates.push(i.Date);

        });
        var mostRecentDate = ""
        for(let i = 0;i < dates.length; i++){
          if(mostRecentDate == ""){
            mostRecentDate = dates[i];
            continue
          }
          const splitedDates = dates[i].split("-");
          const splitedCurrentDates = mostRecentDate.split("-");

          if((Number(splitedDates[0])<Number(splitedCurrentDates[0])) && (Number(splitedDates[1])<Number(splitedCurrentDates[1]))&&(Number(splitedDates[2])<Number(splitedCurrentDates[2]))){
            mostRecentDate = dates[i];
          }
        }

        events.map(i => {
          if (mostRecentDate == i.Date){
            this.setState({correctEvent: i});
            this.setState({eventDescription: i.Desc});
            this.setState({eventName: i.Name});
          }
        });      
        });
      axios.get('http://localhost:8000/api/artwork')
        .then(res => {
          this.setState({allArt : res.data })
        });
  }

  render(){

    return (
      <div className="Home">
        <Header/>
  
        <div id="MainLogo">
          <img src={require('./imageHomeSource/x.png')} alt="Logo" id="LogoItem" />
        </div>
        <div id="TagLine">
          <h1> Materials, a Space, Create.</h1>
        </div>
  
        {/* restructured, removed grid format so text flows better with new images */}
        {/* also made it responsive to other resolutions */}
        <div id="LatestEvent">
          <div id="LatestEventItem">
          
            {this.state.allArt.map(art => {
            if (art.Event == this.state.correctEvent.Name){
              require.context("./ArtFolder/", true)
              const imagePath = `${art.Photo}`;
              return (
                <img 
                  src={require("./ArtFolder/"+imagePath)} 
                  alt="An image of recent event"
                  id="LatestEventPhoto"
                />
              )
            }
          })}
            
            {/*<img src={require('./imageHomeSource/LatestEventPhoto.png')} alt="An image of recent event" id="LatestEventPhoto" /> */}
          </div>
          <div id="LatestEventInfo">
            <h2 id="LatestEventTitleItem">{this.state.eventName}</h2>
            <p id="DescriptionItem">{this.state.eventDescription}</p>
            <button id="LearnMoreButton">
              <a href="/events" id='Link'>Learn More</a>
            </button>
          </div>
        </div>
  
          {/* <div id="LatestEventTitle">
            <h2 id="LatestEventTitleItem">Latest Event Name.</h2>
          </div>
          <div id="LatestEventDescription">
            <p id="DescriptionItem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies posuere enim nec sodales. Maecenas ultrices nisi lacus, et laoreet mi dapibus at. Fusce ex sem, pharetra varius sem bibendum, blandit pellentesque sem. Praesent non orci ipsum. Etiam consectetur tortor quis magna consequat aliquam. Donec mattis arcu augue, sed ultrices eros auctor in. </p>
          </div>
          <div id="LatestEventPhoto">
            <img src={require('./imageHomeSource/LatestEventPhoto.png')} alt="An image of recent event" id="LatestEventItem" />
          </div>
          <div id="LearnMoreButton">
          <a id="LearnMoreButtonItemLink" href=""> <button id="LearnMoreButtonItem">Learn More</button></a>
          </div> */}
        
        {/* restructure */}
        {/* lets keep these as is i guess */}
        <div id="GalleryView">
          <div id="GalleryPhotos">
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage1.jpg')} alt="Artwork by Tracy" id="GalleryPhoto"/></a>
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage2.jpg')} alt="Fortune by Rowan Fartousi" id="GalleryPhoto"/></a>
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage3.jpg')} alt="Dagger by Student" id="GalleryPhoto"/></a>
          </div>
          <p>Take a look at our collection of student-made artwork from our past events.</p>
          <button id="GalleryButton"><a id='Link' href="/gallery">View Our Gallery</a></button>
  
        </div>
        {/* <div id="GalleryView">
          <div class="GalleryPhoto">
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage1.jpg')} alt="Logo" id="GalleryItem1" /></a>
          </div>
          <div class="GalleryPhoto">
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage2.jpg')} alt="Logo" id="GalleryItem2" href="/gallery" /></a>
          </div>
          <div class="GalleryPhoto">
            <a href="/gallery"><img src={require('./imageHomeSource/GalleryImage3.jpg')} alt="Logo" id="GalleryItem3" href="/gallery"/></a>
          </div>
        </div>  
        <div id="GalleryExtra">
        
          <p id="GalleryDescription">Take a look at our collection of student-made artwork from our past events.</p>
          <button id="GalleryButton"><a id="GalleryLink" href="/gallery">View Our Gallery</a></button>
        </div>   */}
  
        <Footer/>
  
      </div>
  
    );
  }
  
}

