// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavScrollExample from "./Component/Header"; // Your Navbar
import Home from "./Component/Home";
import OurStory from "./Component/OurStory"; // Ensure this file/component exists
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavScrollExample /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OurStory" element={<OurStory />} /> {/* ✅ Fixed */}
      </Routes>
    </Router> 
  );
}

export default App;
