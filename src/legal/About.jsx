import React from "react";
import '../css/Legal.css';

const About = () => {
  return (
    <div className="legal-page">
      <h1>About FunFriday</h1>

      <section>
        <p>
          FunFriday is your go-to web application for organizing team activities
          and energizing workplace fun. Whether you're planning a quick icebreaker
          or a full team-building session, FunFriday makes it simple and enjoyable.
        </p>
      </section>

      <section>
        <h2>What We Offer</h2>
        <ul>
          <li><strong>Split Team Generator</strong> – Quickly create balanced groups.</li>
          <li><strong>Timer & Stopwatch</strong> – Keep activities on track with precision.</li>
          <li><strong>Easy-to-use Tools</strong> – Designed for speed, simplicity, and fun.</li>
        </ul>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          We believe that work should be more than tasks and deadlines—it should
          also be about connection, collaboration, and joy. FunFriday is built to
          enhance group experiences by providing free, fast, and accessible tools
          that bring people together.
        </p>
      </section>

      <section>
        <h2>Join the Fun</h2>
        <p>
          Start exploring FunFriday today and make every team activity a memorable one!
        </p>
      </section>
    </div>
  );
};

export default About;