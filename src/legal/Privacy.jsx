import React from "react";
import "../css/Legal.css";

const Privacy = () => {
  return (
    <div className="legal-page">
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> {new Date().getFullYear()}</p>

      <section>
        <p>
          Welcome to <strong>FunFriday</strong> (https://funfriday.online).
          We are committed to protecting your privacy and ensuring transparency
          in how information is handled on our website.
        </p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p>
          FunFriday does not require account registration and does not directly
          collect personally identifiable information such as names, email
          addresses, phone numbers, or payment details.
        </p>

        <p>
          However, certain non-personal information may be collected
          automatically when you visit the website, including:
        </p>

        <ul>
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>General geographic location (non-precise)</li>
        </ul>
      </section>

      <section>
        <h2>2. Cookies and Tracking Technologies</h2>
        <p>
          Our website may use cookies and similar technologies to enhance user
          experience and analyze website traffic.
        </p>

        <p>
          Cookies are small text files stored on your device. You can control
          or disable cookies through your browser settings. Please note that
          disabling cookies may affect certain features of the website.
        </p>
      </section>

      <section>
        <h2>3. Third-Party Advertising</h2>
        <p>
          FunFriday may display advertisements served by third-party vendors,
          including Google.
        </p>

        <p>
          Google uses cookies to serve ads based on a user’s prior visits to
          this website or other websites. This enables the display of ads that
          may be relevant to users.
        </p>

        <p>
          Users may opt out of personalized advertising by visiting:
        </p>

        <p>
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
        </p>
      </section>

      <section>
        <h2>4. Data Usage</h2>
        <p>
          Any automatically collected data is used solely to:
        </p>
        <ul>
          <li>Improve website performance and functionality</li>
          <li>Understand user interaction and engagement</li>
          <li>Enhance the overall gaming experience</li>
        </ul>
      </section>

      <section>
        <h2>5. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of external sites.
          We encourage users to review their respective privacy policies.
        </p>
      </section>

      <section>
        <h2>6. Children’s Privacy</h2>
        <p>
          FunFriday does not knowingly collect personal information from
          children under the age of 13. If you believe a child has provided
          personal data, please contact us for removal.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>

      <section>
        <h2>8. Contact Information</h2>
        <p>
          If you have any questions regarding this Privacy Policy, you may
          contact us at:
        </p>

        <p><strong>Email:</strong> saymondandru71@gmail.com</p>
      </section>
    </div>
  );
};

export default Privacy;
