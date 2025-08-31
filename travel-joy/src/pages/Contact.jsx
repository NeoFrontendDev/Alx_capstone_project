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
    <div className="page contact-container">
      <h2 className="contact-title">Contact Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            onChange={handleChange}
            value={form.name}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onChange={handleChange}
            value={form.email}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            value={form.message}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Send</button>
        </form>
      ) : (
        <p className="contact-success">
          ✅ Thank you, <span>{form.name}</span>! We’ll get back to you soon.
        </p>
      )}
    </div>
  );
}

export default Contact;
