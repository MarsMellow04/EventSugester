import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const [name, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [max_attendees, setAttendees] = useState('');

  const handleCreateEvent = async () => {
    try {
      const userId = 1; // Replace with actual user ID or fetch it from context/auth
      const response = await axios.post('http://127.0.0.1:5000/api/event', {
        name,
        description,
        max_attendees,
      }, {headers: {
        'X-Email': 'coolemail@example.org', // Adjust email as needed
      }});
      console.log(response.data.message);
      alert("Event created successfully!");
    } catch (error) {
      console.error("Error creating the event", error);
      alert("There was an error creating the event!");
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <input placeholder="Event Name" value={name} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="Max Attendees " value={max_attendees} onChange={(e) => setAttendees(e.target.value)} />
      <button onClick={handleCreateEvent}>Create Event</button>
    </div>
  );
}

export default CreateEvent;
