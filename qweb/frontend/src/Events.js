import React, { useState } from 'react';
import './Events.css';
import Footer from './Footer';
import Header from './Header';

const upcomingEvents = [
  { id: 1, name: 'Event Name 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', time: '6:00 PM - 7:00 PM', location: 'Kingston Hall, Room 200' },
  { id: 2, name: 'Event Name 2', description: 'Description for Event Name 2', time: '7:00 PM - 8:00 PM', location: 'Kingston Hall, Room 201' },
  { id: 3, name: 'Event Name 3', description: 'Description for Event Name 3', time: '8:00 PM - 9:00 PM', location: 'Kingston Hall, Room 202' },
  { id: 4, name: 'Event Name 4', description: 'Description for Event Name 4', time: '9:00 PM - 10:00 PM', location: 'Kingston Hall, Room 203' },
];

const pastEvents = {
  2024: [
    { id: 1, name: 'Event Name 1', description: 'Description for Past Event Name 1' },
    { id: 2, name: 'Event Name 2', description: 'Description for Past Event Name 2' },
    { id: 3, name: 'Event Name 3', description: 'Description for Past Event Name 3' },
    { id: 4, name: 'Event Name 4', description: 'Description for Past Event Name 4' },
    { id: 5, name: 'Event Name 5', description: 'Description for Past Event Name 5' },
    { id: 6, name: 'Event Name 6', description: 'Description for Past Event Name 6' },
    { id: 7, name: 'Event Name 7', description: 'Description for Past Event Name 7' },
    { id: 8, name: 'Event Name 8', description: 'Description for Past Event Name 8' },
  ],
  2023: [
    { id: 1, name: 'Event Name 1', description: 'Description for Past Event Name 1' },
    { id: 2, name: 'Event Name 2', description: 'Description for Past Event Name 2' },
    { id: 3, name: 'Event Name 3', description: 'Description for Past Event Name 3' },
    { id: 4, name: 'Event Name 4', description: 'Description for Past Event Name 4' },
    { id: 5, name: 'Event Name 5', description: 'Description for Past Event Name 5' },
    { id: 6, name: 'Event Name 6', description: 'Description for Past Event Name 6' },
    { id: 7, name: 'Event Name 7', description: 'Description for Past Event Name 7' },
    { id: 8, name: 'Event Name 8', description: 'Description for Past Event Name 8' },
  ],
};

function Events() {
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState(upcomingEvents[0]);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedPastEvent, setSelectedPastEvent] = useState(pastEvents[2024][0]);

  return (
    <div className="events-container">
      <Header />
      <section className="events-inner">
        <div className="events-wrapper">
          <div className="upcoming-events-section">
            <h1>Upcoming Events.</h1>
            <div className="upcoming-events-list">
              {upcomingEvents.map((event) => (
                <button
                  key={event.id}
                  className={`event-button ${selectedUpcomingEvent.id === event.id ? 'active' : ''}`}
                  onClick={() => setSelectedUpcomingEvent(event)}
                >
                  {event.name}
                </button>
              ))}
            </div>
          </div>
          <div className="event-details-section">
            <div className="event-details">
              <h2>{selectedUpcomingEvent.name}</h2>
              <p className="event-description">{selectedUpcomingEvent.description}</p>
              <div className="event-timing-location">
                <p>{selectedUpcomingEvent.time}</p>
                <p>{selectedUpcomingEvent.location}</p>
              </div>
              <button className="register-button">Register for Event</button>
            </div>
          </div>
        </div>
      </section>
      <section className="past-events-section">
        <h2 className="section-title">Past Events.</h2>
        <div className="year-buttons-wrapper">
          {Object.keys(pastEvents).map((year) => (
            <button
              key={year}
              className={`year-button ${selectedYear.toString() === year ? 'active' : ''}`}
              onClick={() => {
                setSelectedYear(parseInt(year));
                setSelectedPastEvent(pastEvents[year][0]);
              }}
            >
              {year}
            </button>
          ))}
        </div>
        <div className="past-events-list">
          {pastEvents[selectedYear].map((event) => (
            <button
              key={event.id}
              className={`past-event-button ${selectedPastEvent.id === event.id ? 'active' : ''}`}
              onClick={() => setSelectedPastEvent(event)}
            >
              {event.name}
            </button>
          ))}
        </div>
        <div className="past-event-details">
          <p className="event-description">{selectedPastEvent.description}</p>
        </div>
        <div className="event-gallery-wrapper">
          <div className="gallery-images">
            <div className="gallery-image-placeholder"></div>
            <div className="gallery-image-placeholder"></div>
            <div className="gallery-image-placeholder"></div>
          </div>
          <button className="view-gallery-button">VIEW EVENT GALLERY</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Events;