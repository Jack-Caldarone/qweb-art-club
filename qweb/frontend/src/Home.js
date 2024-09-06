
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
        <h1> Materials, a Space, Create.</h1>
      </div>

      {/* restructured, removed grid format so text flows better with new images */}
      {/* also made it responsive to other resolutions */}
      <div id="LatestEvent">
        <div id="LatestEventItem">
          <img src={require('./imageHomeSource/LatestEventPhoto.png')} alt="An image of recent event" id="LatestEventPhoto" />
        </div>
        <div id="LatestEventInfo">
          <h2 id="LatestEventTitleItem">Latest Event Name.</h2>
          <p id="DescriptionItem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies posuere enim nec sodales. Maecenas ultrices nisi lacus, et laoreet mi dapibus at. Fusce ex sem, pharetra varius sem bibendum, blandit pellentesque sem. Praesent non orci ipsum. Etiam consectetur tortor quis magna consequat aliquam. Donec mattis arcu augue, sed ultrices eros auctor in. </p>
          <button id="LearnMoreButton">
            <a href="/events">Learn More</a>
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
        <button id="GalleryButton"><a id="GalleryLink" href="/gallery">View Our Gallery</a></button>

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

export default Home;
