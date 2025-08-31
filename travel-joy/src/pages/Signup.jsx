import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
  };

  return (
    <div className="page signup_page">
      <h1>The World Awaits</h1>
      <p>Create an account to start your adventure.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <p className="acc">
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;