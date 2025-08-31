import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <div className="page login_page">
      <h1>Login</h1>
      <p>Welcome back! Please login to continue.</p>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <p className="acc">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;