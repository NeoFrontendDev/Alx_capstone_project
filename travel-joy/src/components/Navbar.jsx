import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/logo.png" alt="Travel Planner Logo" />
        <NavLink to="/"><p>Travel Joy</p></NavLink>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <ul className={`navlinks ${menuOpen ? "active" : ""}`}>
        <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/destinations" onClick={() => setMenuOpen(false)}>Destinations</NavLink></li>
        <li><NavLink to="/weather" onClick={() => setMenuOpen(false)}>Weather</NavLink></li>
        <li><NavLink to="/quiz" onClick={() => setMenuOpen(false)}>Quiz</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        <li><NavLink to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</NavLink></li>
        <li><NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;