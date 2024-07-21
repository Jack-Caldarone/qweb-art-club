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
                <button class="years-button">2023</button>
                <button class="years-button"> 2024</button>
              </div>

        <hr class="solid"></hr>

        <div class="years-container">
          <button class="events-button">Event Name</button>
          <button class="events-button">Event Name</button>
          <button class="events-button">Event Name</button>
          <button class="events-button">Event Name</button>
          <button class="events-button">Event Name</button>
          <button class="events-button">Event Name</button>
        </div>


        <br/>

        <div class="event-desc-container">
          <p class="event-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim.
          </p>
        </div>

<section class="frame-wrapper6">
  <div class="frame-parent6">
    <div class="rectangle-container">
      <div class="frame-child4"></div>
      <div class="rectangle-textarea"></div>
      <div class="frame-child5"></div>
    </div>
    <div class="footer-background4">

      <div class="footer-background-child"></div>
      <div class="footer-background-item"></div>

      <div class="footer-divider"></div>
      <div class="footer-background-inner"></div>
      <div class="footer-background-child1"></div>
      <div class="footer-background-child2"></div>


      <div class="footer-background-child3"></div>
      <div class="rectangle-parent1">
        <div class="frame-child6"></div>
        <div class="title-artist-name-container">
          <p class="title">
            <b>“Title”</b>
          </p>
          <p class="artist-name">Artist Name</p>
        </div>
        <div class="mediums-wrapper">
          <div class="mediums">Mediums</div>
        </div>
      </div>
    </div>
  </div>
</section>
</main>






            <Footer/>
        </div>
    )
}

export default Gallery;