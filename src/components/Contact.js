// src/Contact.js
import React, { useState } from "react";
import "./Contact.css"; // Import styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required";
    if (!data.email || !/\S+@\S+\.\S+/.test(data.email))
      errors.email = "Valid email is required";
    if (!data.message) errors.message = "Message is required";
    return errors;
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {submitted && (
        <p className="success-message">
          Your message has been sent successfully!
        </p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "error" : ""}
          />
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
