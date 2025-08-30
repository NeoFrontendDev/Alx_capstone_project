import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      {}
      <div className="hero-home">
        <h1>Plan Trips That Match Your Personality</h1>
        <p>Discover destinations and activities tailored just for you.</p>
      </div>

      {}
      <div className="directions">
        <div className="direction-card">
          <img src="/images/checklist.webp" alt="Checklist" />
          <p>Find your travel style</p>
        </div>
        <div className="direction-card">
          <img src="/images/location_pin.jpg" alt="Location Pin" />
          <p>Get recommendations</p>
        </div>
        <div className="direction-card">
          <img src="/images/plane_icon.webp" alt="Plane Icon" />
          <p>Plan & Go</p>
        </div>
      </div>

      {/* Quiz Button */}
      <div className="home-quiz">
        <Link className="quiz-btn" to="/quiz">Take the Quiz</Link>
      </div>
    </div>
  );
}

export default Home;