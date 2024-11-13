import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import "./Preferences.css"

function Preferences (){
    return (
        <div className="container">
            <h1>Select your preferences</h1>
            <div className="selections">
                <div className="location">
                    <h2>Location</h2>
                </div>
                <div className="categories">
                    <h2>Categories</h2>
                </div>
                <div className="event-type">
                    <h2>Event-type</h2>
                </div>
                {/* <h2 className="location">Location</h2>
                <h2 className="categories">Categories</h2>
                <h2 className="event-type">Event-type</h2> */}
            </div>
            <div className="homePageButton">
                <Link to="/events">
                    <button>Get Started</button>
                </Link> 
            </div> 
        </div>
    );
};
export default Preferences;