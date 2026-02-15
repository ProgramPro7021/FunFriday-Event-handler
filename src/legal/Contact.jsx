import React, { useState } from "react";
import '../css/Legal.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="legal-page">
      <h1>Contact Us</h1>

      {submitted ? (
        <p>Thank you for contacting us. We will get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
