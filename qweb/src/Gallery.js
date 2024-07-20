import './Gallery.css';
import Header from './Header';
import Footer from './Footer';

function Gallery(){
    return(
        <div className="Gallery">
            <Header/>
            <main class="frame-main">
                <h1>Gallery.</h1>

{/* <!-- years --> */}
<section class="past-events-container">
    <div>
      <button class="event-name-wrapper2">
        <div class="event-name-text">2024</div>
      </button>
    </div>
    <div>
      <button class="event-name-wrapper2">
        <div class="event-name-text">2023</div>
      </button>
    </div>
</section>

<hr class="solid"></hr>

{/* <!-- events --> */}
<section class="past-events-container">

  <div class="past-events2">
    <div class="mediums-label2">
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
    </div>
    
    <div class="mediums-label2">
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
    </div>

    <div class="mediums-label2">
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
    </div>

    <div class="mediums-label2">
      <button class="event-name-wrapper">
        <div class="event-name-text">Event Name</div>
      </button>
    </div>
  </div>
  
</section>
<section class="frame-section">
  <div class="event-description-group">
    <div class="event-description1"></div>
    <div class="lorem-ipsum-dolor-container2">
      <p class="lorem-ipsum-dolor3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim.
      </p>
      <p class="blank-line4">&nbsp;</p>
      <p class="blank-line5">&nbsp;</p>
    </div>
  </div>
</section>
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