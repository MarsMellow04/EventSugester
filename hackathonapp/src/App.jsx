import React from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";

import Events from "./pages/Events";
import Login from "./pages/Login";
import Preferences from "./pages/Preferences";
import Home from "./pages/Home";
const App = () => {
    return (
        <HashRouter>
          <div className="content">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/preferences" element={<Preferences />} />
                <Route path="/home" element={<Home/>} />
                <Route path="/events" element={<Events/>} />
            </Routes>
          </div>
        </HashRouter>
    );
};
export default App;

