import './Gallery.css';
import Header from './Header';
import Footer from './Footer';

function Gallery(){
    return(
        <div className="Gallery">
            <Header/>
            <main class="frame-main">
              <h1>Gallery.</h1>

              <div class="years-container">
                <button class="years-button"><div class="years-text">2023</div></button>
                <button class="years-button"><div class="years-text">2024</div></button>
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

      <div class="below-banner">
        <div class="rectangle-parent1">
          <div class="title-artist-name-container">
            <p class="art-title">
              <b>“Title”</b>
            </p>
            <p class="artist-name">Artist Name</p>
          </div>
          <div class="mediums-wrapper">
            <div class="mediums">Mediums</div>
          </div>
        </div>
      </div>
</main>
         <Footer/>
        </div>
    )
}

export default Gallery;