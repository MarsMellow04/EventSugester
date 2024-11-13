import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import foosballImage from "../assets/foosball.png";
import xmasDinImage from "../assets/xmas-din.png"; // Christmas dinner image
import ibmOfficeImage from "../assets/ibm-office.png"; // IBM office image
import './Home.css';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

function Home() {
    const [events, setEvents] = useState([]); 
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [liked, setLiked] = useState(false);  
    const [loading, setLoading] = useState(true);  // Track loading state
    const [error, setError] = useState(null);  // Track error state
    const email = "coolemail@example.org"; // Set user's email

    // Fetch events from the backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/api/GetUserEvents', {
                    headers: {
                        'X-Email': email, // Provide the email to the backend
                    },
                });
                setEvents(response.data);  // Set events data
                setLoading(false); // Done loading
            } catch (error) {
                console.error("Error retrieving events:", error);
                setError("There was an error retrieving events.");
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    // Get current event based on the index
    const currentEvent = events[currentEventIndex];

    // Handle "like" button click
    const handleLike = () => {
        setLiked(!liked);  // Toggle the like state
    };

    // Change event and reset the liked state
    const handleChangeEvent = (newIndex) => {
        setLiked(false);  // Reset the liked state when changing events
        setCurrentEventIndex(newIndex);  // Set the new event index
    };

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading events...</p>
                {/* Optional: Add a spinner here */}
            </div>
        );
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="body-container">
            <Navbar />
            <div className="container">
                <div className="panel">
                    {currentEvent ? (
                        <>
                            <h2>{currentEvent.name}</h2>

                            {/* Event Location, Date, Time */}
                            <p>
                                {currentEventIndex === 0
                                    ? "Hursley    Canteen    25.12.24    1pm"
                                    : currentEventIndex === 1
                                    ? "Hursley    Teams    12.12.24    3pm"
                                    : `${currentEvent.location}    ${currentEvent.date}    ${currentEvent.time}`
                                }
                            </p>

                            {/* Top Arrow */}
                            <div 
                                className="arrow-top" 
                                onClick={() => handleChangeEvent((currentEventIndex - 1 + events.length) % events.length)}
                            >
                                <i className="fa fa-chevron-up"></i> 
                            </div>

                            {/* Event image and action buttons */}
                            <div className="image-and-buttons">
                                <div className="image-wrapper">
                                    <img src={currentEventIndex === 0 ? xmasDinImage : ibmOfficeImage} alt="event" />
                                </div>

                                <div className="button-container">
                                    {/* Heart button */}
                                    <button 
                                        className={`like-button ${liked ? 'liked' : ''}`} 
                                        onClick={handleLike}
                                    >
                                        <i className="fa fa-heart"></i>
                                    </button>

                                    {/* Event actions */}
                                    <button 
                                        className="button" 
                                        onClick={() => alert(`Enroll in event with id: ${currentEvent.id}`)}
                                    >
                                        Enroll
                                    </button>
                                    <button 
                                        className="button" 
                                        onClick={() => alert(`Share event with id: ${currentEvent.id}`)}
                                    >
                                        Share
                                    </button>
                                </div>
                            </div>

                            {/* Bottom Arrow */}
                            <div 
                                className="arrow-bottom" 
                                onClick={() => handleChangeEvent((currentEventIndex + 1) % events.length)}
                            >
                                <i className="fa fa-chevron-down"></i> 
                            </div>
                        </>
                    ) : (
                        <p>No events available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
