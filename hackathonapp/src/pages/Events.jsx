import React, { useState } from 'react';
import ViewEvents from './ViewEvents';
import CreateEvent from './CreateEvent';
import Navbar from '../components/Navbar';
import './Events.css';


function EventPage() {
  const [selectedOption, setSelectedOption] = useState('view');

  return (
    <div>
      <Navbar/>
      <h1 className="title">event manager</h1>
      <div className="dropdown">
        <button className="button">
          <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
            <option value="view">View Mode</option>
            <option value="create">Create Mode</option>
          </select>
        </button>
      {selectedOption === 'view' ? <ViewEvents /> : <CreateEvent />}
      </div>
      
    </div>
  );
}

export default EventPage;
