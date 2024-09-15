import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Events.css';
import Footer from './Footer';
import Header from './Header';

function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState({});
  const [selectedUpcomingEvent, setSelectedUpcomingEvent] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedPastEvent, setSelectedPastEvent] = useState(null);
  const [years, setYears] = useState([]);

  // Fetch upcoming events from the backend
  useEffect(() => {
    axios.get('http://localhost:8000/api/upcoming-events')
      .then((response) => {
        setUpcomingEvents(response.data);
        setSelectedUpcomingEvent(response.data[0]); // Set the first upcoming event as default
      })
      .catch((error) => {
        console.error('Error fetching upcoming events:', error);
      });
  }, []);

  // Fetch all past events from the backend once
  useEffect(() => {
    axios.get('http://localhost:8000/api/past-events')
      .then(response => {
        // Group events by year
        const groupedByYear = response.data.reduce((acc, event) => {
          if (!acc[event.year]) acc[event.year] = [];
          acc[event.year].push(event);
          return acc;
        }, {});

        // Get all years and sort them in descending order
        const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

        setPastEvents(groupedByYear); // Set grouped events into state
        setYears(sortedYears); // Set years into state
        setSelectedYear(sortedYears[0]); // Automatically select the first year (most recent year)
        setSelectedPastEvent(groupedByYear[sortedYears[0]][0]); // Set the first event of the most recent year
      })
      .catch(error => {
        console.error('Error fetching past events:', error);
      });
  }, []);

  return (
    <div className="events-container">
      <Header />

      {/* Upcoming Events Section */}
      <section className="events-inner">
        <div className="events-wrapper">
          <div className="upcoming-events-section">
            <h1>Upcoming Events.</h1>
            <div className="upcoming-events-list">
              {upcomingEvents.map((event) => (
                <button
                  key={event.id}
                  className={`event-button ${selectedUpcomingEvent && selectedUpcomingEvent.id === event.id ? 'active' : ''}`}
                  onClick={() => setSelectedUpcomingEvent(event)}
                >
                  {event.name}
                </button>
              ))}
            </div>
          </div>
          {selectedUpcomingEvent && (
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
          )}
        </div>
      </section>

      {/* Past Events Section */}
      <section className="past-events-section">
        <h2 className="section-title">Past Events.</h2>

        {/* Render year buttons */}
        <div className="year-buttons-wrapper">
          {years.map((year) => (
            <button
              key={year}
              className={`year-button ${selectedYear === year ? 'active' : ''}`}
              onClick={() => {
                setSelectedYear(year);
                setSelectedPastEvent(pastEvents[year][0]); // Set the first event of the selected year
              }}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Display past events list only if data exists for the selected year */}
        {pastEvents[selectedYear] && (
          <div className="past-events-list">
            {pastEvents[selectedYear].map((event) => (
              <button
                key={event.id}
                className={`past-event-button ${selectedPastEvent && selectedPastEvent.id === event.id ? 'active' : ''}`}
                onClick={() => setSelectedPastEvent(event)}
              >
                {event.name}
              </button>
            ))}
          </div>
        )}

        {/* Display selected past event details */}
        {selectedPastEvent && (
          <div className="past-event-details">
            <p className="event-description">{selectedPastEvent.description}</p>
          </div>
        )}

        <div className="event-gallery-wrapper">
          <div className="gallery-images">
            <div className="gallery-image-placeholder"></div>
            <div className="gallery-image-placeholder"></div>
            <div className="gallery-image-placeholder"></div>
          </div>
          <a href="/gallery">
            <button className="view-gallery-button">VIEW EVENT GALLERY</button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Events;
