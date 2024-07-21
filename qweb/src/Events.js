import logo from './logo.svg';
import './App.css';

// function Events() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload Lumber.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default Events;

import React from 'react';
// import './global.css';
import './Events.css';

function Events() {
  const event_button = (id) => {
    console.log(`Event button ${id} clicked`);
    // Add the functionality you need for the button click here
  };
  
  return (
    <div className="events2">
      <header className="navbar-background-group">
        <div className="navbar-background1"></div>
        <a href="home.html"><b className="home1">Home.</b></a>
        <a href="about.html"><b className="about-us1">About Us.</b></a>
        <a href="events.html"><b className="events1">Events.</b></a>
        <a href="gallery.html"><b className="gallery1">Gallery.</b></a>
        <a href="contact.html"><b className="contact1">Contact.</b></a>
      </header>
      <section className="events2-inner">
        <div className="frame-group">
          <div className="frame-parent1">
            <div className="upcoming-events-wrapper">
              <h1 className="upcoming-events">Upcoming Events.</h1>
            </div>
            <div className="frame-parent2">
              <button className="current-event-button" onClick={() => event_button(1)}>
                <div className="event-name1">Event Name.</div>
              </button>
              <button className="current-event-button">
                <div className="event-name2">Event Name.</div>
              </button>
              <button className="current-event-button">
                <div className="event-name2">Event Name.</div>
              </button>
              <button className="current-event-button">
                <div className="event-name4">Event Name.</div>
              </button>
            </div>
          </div>
          <div className="lorem-ipsum">
            <div className="event-info-parent">
              <div className="event-info"></div>
              <div className="event-name-wrapper1">
                <h3 className="event-name5">Event Name.</h3>
              </div>
              <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
                <div className="lorem-ipsum-dolor-container">
                  <p className="lorem-ipsum-dolor1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <p className="blank-line">&nbsp;</p>
                  <p className="blank-line1">&nbsp;</p>
                </div>
              </div>
              <div className="pm-700-pm-kingston-hall-ro-parent">
                <b className="pm-700-container">
                  <p className="pm-700">6:00 PM - 7:00 PM</p>
                  <p className="kingston-hall-room">Kingston Hall, Room 200</p>
                </b>
                <div className="frame-wrapper1">
                  <button className="register-for-event-wrapper">
                    <div className="register-for-event">Register for Event</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events2-child">
        <div className="section2-background-parent">
          <div className="section2-background"></div>
          <div className="frame-parent3">
            <div className="frame-wrapper2">
              <div className="past-events-parent">
                <h1 className="past-events">Past Events.</h1>
                <div className="button-register-wrapper">
                  <div className="button-register">
                    <div className="wrapper">
                      <div className="div">2024</div>
                    </div>
                    <div className="container">
                      <div className="div1">2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="line-icon" loading="lazy" alt="" src="./public/line-4.svg" />
          </div>
          <div className="past-events-wrapper">
            <div className="past-events1">
              <div className="frame-parent4">
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
              </div>
              <div className="frame-parent4">
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
              </div>
              <div className="frame-parent4">
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
              </div>
              <div className="frame-parent4">
                <button className="past-event-wrapper">
                  <div className="button-text">Event Name</div>
                </button>
              </div>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="event-description-parent">
              <div className="event-description"></div>
              <div className="lorem-ipsum-dolor-container1">
                <p className="lorem-ipsum-dolor2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                </p>
                <p className="blank-line2">&nbsp;</p>
                <p className="blank-line3">&nbsp;</p>
              </div>
            </div>
          </div>
          <div className="frame-wrapper4">
            <div className="frame-parent5">
              <div className="rectangle-group">
                <div className="rectangle-div"></div>
                <div className="frame-child1"></div>
                <div className="frame-child2"></div>
              </div>
              <div className="gallery-callto-action">
                <button className="view-event-gallery-wrapper">
                  <div className="view-event-gallery">VIEW EVENT GALLERY</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-background-group">
        <div className="footer-background1"></div>
        <div className="frame-wrapper5">
          <div className="art-club-group">
            <b className="art-club1">
              <p className="art1">Art</p>
              <p className="club1">Club.</p>
            </b>
            <div className="copyright1">© 2023 — 2024</div>
          </div>
        </div>
        <div className="materials-a-space-create-ha-container">
          <div className="materials-a-space-container1">
            <p className="materials-a-space-create1">
              <b>Materials, a Space, Create.</b>
            </p>
            <p className="have-any-questions1">Have any questions?</p>
            <p className="get-in-contact1">Get in contact with us now.</p>
          </div>
        </div>
        <div className="divider-container">
          <img className="divider-icon1" loading="lazy" alt="" src="./public/divider1.svg" />
        </div>
        <div className="instagram-container">
          <a href="https://www.instagram.com/artclubqu"><div className="instagram1">Instagram.</div></a>
        </div>
        <div className="e-mail-container">
          <a href="https://www.linkedin.com/company/artclubqu/"><div className="e-mail1">LinkedIn.</div></a>
        </div>
        <div className="admin-container">
          <a href="login.html"><div className="admin1">Admin.</div></a>
        </div>
      </footer>
    </div>
  );
}

export default Events;