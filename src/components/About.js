// src/About.js
import React from "react";
import "./About.css"; // Import the CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p className="intro-text">
          Welcome to our website! We are passionate about creating impactful
          digital solutions.
        </p>
        <div className="section">
          <h3>Our Mission</h3>
          <p>
            Our mission is to deliver high-quality web and mobile applications
            that make life easier. We strive to blend creativity with
            functionality in every project.
          </p>
        </div>
        <div className="section">
          <h3>Our Values</h3>
          <ul>
            <li>
              <strong>Innovation:</strong> Constantly pushing boundaries to
              create cutting-edge solutions.
            </li>
            <li>
              <strong>Integrity:</strong> Being transparent, honest, and ethical
              in all our interactions.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Always putting our
              clients' needs at the forefront.
            </li>
          </ul>
        </div>
        <div className="section">
          <h3>Our Team</h3>
          <p>
            Our team consists of passionate developers, designers, and
            strategists who work tirelessly to bring our clients' visions to
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
