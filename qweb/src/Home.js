

import React from "react"
import "./Home.css";
import "./main.css";
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div className="Home">
      <Header/>

      <div id="MainLogo">
        <img src={require('./imageHomeSource/x.png')} alt="Logo" id="LogoItem" />
      </div>
      <div id="TagLine">
        <h1> Materials, a Space, Create</h1>
      </div>

      <div id="LatestEvent">
        <div id="LatestEventTitle">
          <h2>Latest Event Date</h2>
        </div>
        <div id="LatestEventDescription">
          <p>This is the description of the latest event dsadasda</p>
        </div>
        <div id="LatestEventPhoto">
          <img src={require('./imageHomeSource/LatestEventPhoto.png')} alt="An image of recent event" id="LatestEventItem" />
        </div>
        <div id="LearnMoreButton">
          <button>Learn More</button>
        </div>
      </div>
      
      <div id="GalleryView">
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
      
        <p id="GalleryDescription">Take a look at our collection of student-made artwork from our past events</p>
        <button id="GalleryButton"><a id="GalleryLink" href="/gallery">View Our Gallery</a></button>
      </div>  

      <Footer/>

    </div>

  );
}

export default Home;
