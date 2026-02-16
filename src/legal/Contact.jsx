import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../css/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In production, send data to backend or email service here
    console.log("Form Submitted:", formData);

    alert("Thank you! Your message has been sent.");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      
      {/* SEO META */}
      <Helmet>
        <title>Contact FunFriday – Get in Touch</title>
        <meta
          name="description"
          content="Contact FunFriday for questions, feedback, partnerships, or support. Reach out using our contact form or email."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <h1>Contact FunFriday 📬</h1>
        <p>
          Have questions, suggestions, or partnership ideas? We'd love to hear
          from you. Use the form below and our team will respond within
          24–48 business hours.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-section">
        <form className="contact-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="6"
              required
            />
          </div>

          <button type="submit" className="cta-button">
            Send Message
          </button>
        </form>
      </section>

      {/* ALTERNATIVE CONTACT INFO */}
      <section className="contact-info">
        <h2>Other Ways to Reach Us</h2>
        <ul>
          <li>📧 Email: kirandhule50@outlook.com</li>
          <li>🌐 Social: @FunFriday on Twitter & LinkedIn</li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>

        <div className="faq-item">
          <h3>Is FunFriday free to use?</h3>
          <p>
            Yes. All games and tools on FunFriday are free and accessible
            without registration.
          </p>
        </div>

        <div className="faq-item">
          <h3>Do I need to install anything?</h3>
          <p>
            No installation required. FunFriday works directly in your browser
            on desktop and mobile devices.
          </p>
        </div>

        <div className="faq-item">
          <h3>How quickly will I get a response?</h3>
          <p>
            We typically respond within 24–48 business hours.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
