import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page cont-form card">
      <h2 className="centered">Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required></textarea>
          <button type="submit" className="contact-btn">Send</button>
        </form>
      ) : (
        <p className="centered">Thank you, {form.name}! We’ll get back to you soon.</p>
      )}
    </div>
  );
}

export default Contact;