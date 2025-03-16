import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    // State variables to store form data
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    // State for error and success messages
    const [status, setStatus] = useState('');
  
    // Handle form input changes
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Simple form validation
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('Please fill in all fields.');
        return;
      }
  
      // Simulate form submission success
      setStatus('Your message has been sent! Thank you for reaching out.');
  
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <div className="contact-container">
        <h2>Contact Us</h2>
        
        {status && <p className="status-message">{status}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
            />
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;