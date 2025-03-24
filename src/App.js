import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepages"; // Your homepage with everything
import SeeMorePage from "./components/SeeMorePage"; // The "See More" page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Everything on the homepage */}
        <Route path="/more" element={<SeeMorePage />} /> {/* Separate See More page */}
      </Routes>
    </Router>
  );
}

export default App;
