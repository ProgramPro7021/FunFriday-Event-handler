import React from "react";
import "../css/Legal.css";

const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="hero">
        <h1>About FunFriday 🎉</h1>
        <p>
          FunFriday is a free online platform designed to help teams organize
          engaging, structured, and enjoyable workplace activities. Our goal
          is to make team bonding simple, accessible, and effective for modern
          workplaces.
        </p>
        <button className="cta-button">Explore Our Tools</button>
      </section>

      {/* What is FunFriday */}
      <section className="about-content">
        <h2>What Is FunFriday?</h2>
        <p>
          FunFriday is a browser-based toolkit that helps managers, HR
          professionals, team leaders, and educators organize interactive
          sessions such as team-building games, quick challenges, icebreakers,
          and group activities. Everything works directly in your browser —
          no installation required.
        </p>

        <p>
          Many organizations struggle to maintain engagement during remote
          meetings or weekly sync sessions. FunFriday provides simple tools
          like team split generators, timers, and structured activity
          organizers that remove friction and allow teams to focus on
          collaboration and creativity.
        </p>

        <p>
          Our platform is designed to be lightweight, distraction-free,
          and easy to use across desktop, tablet, and mobile devices.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Toolkit</h2>
        <div className="feature-grid">

          <div className="feature-card">
            <h3>⚡ Split Team Generator</h3>
            <p>
              Instantly create balanced groups for workshops, games, and
              brainstorming sessions. Randomized grouping saves time and
              ensures fairness.
            </p>
          </div>

          <div className="feature-card">
            <h3>⏱ Timer & Stopwatch</h3>
            <p>
              Built-in timing tools help facilitators keep sessions structured
              and efficient. Perfect for quick-fire rounds and productivity
              challenges.
            </p>
          </div>

          <div className="feature-card">
            <h3>🎯 Structured Activity Support</h3>
            <p>
              Clear layouts and simple interfaces allow anyone to run a
              session without technical knowledge.
            </p>
          </div>

          <div className="feature-card">
            <h3>🌐 Fully Online & Accessible</h3>
            <p>
              FunFriday runs entirely in the browser and is accessible from
              anywhere with an internet connection.
            </p>
          </div>

        </div>
      </section>

      {/* Who Is It For */}
      <section className="audience">
        <h2>Who Is FunFriday For?</h2>
        <p>FunFriday is useful for:</p>
        <ul>
          <li>HR professionals organizing employee engagement sessions</li>
          <li>Startup teams running weekly stand-ups</li>
          <li>Corporate teams hosting virtual bonding activities</li>
          <li>Educators conducting classroom group exercises</li>
          <li>Remote teams building culture across locations</li>
        </ul>

        <p>
          Whether your team is fully remote, hybrid, or in-office, structured
          engagement improves communication, collaboration, and morale.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          We believe that workplace culture thrives when people feel connected.
          FunFriday exists to reduce the complexity of organizing interactive
          activities so that leaders can focus on meaningful engagement instead
          of logistics.
        </p>

        <p>
          Our mission is to make team bonding tools accessible to everyone —
          without subscriptions, downloads, or unnecessary barriers.
        </p>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How FunFriday Works</h2>
        <p>
          1. Choose the tool you need (team split, timer, activity support).  
          2. Enter your team details.  
          3. Generate or start instantly.  
          4. Run your session smoothly and efficiently.
        </p>

        <p>
          No account registration is required for basic usage. We prioritize
          simplicity, speed, and user privacy.
        </p>
      </section>

      {/* Transparency Section */}
      <section className="transparency">
        <h2>Transparency & Trust</h2>
        <p>
          FunFriday does not collect unnecessary personal data. We do not sell
          user information. Our platform is designed for safe workplace usage.
        </p>

        <p>
          We may display advertisements to support operational costs, but ads
          do not interfere with core functionality. Our goal is to maintain a
          clean and distraction-free experience.
        </p>

        <p>
          For more details, please review our Privacy Policy and Terms &
          Conditions pages.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision">
        <h2>Looking Ahead</h2>
        <p>
          We are continuously improving FunFriday by expanding activity
          templates, enhancing usability, and refining performance. Our vision
          is to become a reliable resource for organizations seeking simple,
          effective engagement tools.
        </p>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Next Team Session</h2>
        <p>
          Explore our tools today and make your next team activity more
          organized, inclusive, and enjoyable.
        </p>
        <button className="cta-button">Get Started</button>
      </section>

    </div>
  );
};

export default About;
