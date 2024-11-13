import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewEvents.css';

function ViewEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch all events for the specified email
        const response = await axios.get('http://127.0.0.1:5000/api/GetUserEvents', {
          headers: {
            'X-Email': 'coolemail@example.org', // Adjust email as needed
          }
        });

        // Set the events data based on the response
        setEvents(response.data);
        setLoading(false);

      } catch (error) {
        console.error("Error retrieving events:", error);
        setError("There was an error retrieving events.");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Render loading, error, or events
  if (loading) return <div>Loading events...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div >
      <h2 className='box'>Your Events</h2>
      <ul>
        {events.length > 0 ? (
          events.map((event) => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p><strong>Organiser Email:</strong> {event.organiser_email}</p>
              <p><strong>Current Attendees:</strong> {event.current_attendees}</p>
              <p><strong>Max Attendees:</strong> {event.max_attendees}</p>
              <p><strong>Tags:</strong> {event.tags.join(', ')}</p>
            </li>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </ul>
    </div>
  );
}

export default ViewEvents;
