import React from "react";
import "../css/Disclaimer.css";

const Disclaimer = () => {
  return (
    <div className="legal-page">
      <h1>Disclaimer</h1>

      <section>
        <p>
          Welcome to <strong>FunFriday</strong>. The information, tools, and
          interactive features provided on this website are intended solely for
          general entertainment and informational purposes. By accessing or
          using this website, you agree to the terms outlined in this
          Disclaimer.
        </p>
      </section>

      <section>
        <h2>No Professional Advice</h2>
        <p>
          The content available on FunFriday does not constitute professional,
          legal, financial, medical, business, or technical advice. Any actions
          you take based on the information or tools provided are strictly at
          your own risk.
        </p>
      </section>

      <section>
        <h2>Use at Your Own Risk</h2>
        <p>
          Participation in games, team activities, challenges, or interactive
          features available on FunFriday is voluntary. We are not responsible
          for any disputes, injuries, misunderstandings, or losses arising from
          participation in activities facilitated through this platform.
        </p>
      </section>

      <section>
        <h2>Accuracy & Updates</h2>
        <p>
          While we strive to ensure the accuracy and reliability of all
          information presented, FunFriday makes no guarantees regarding
          completeness, accuracy, or timeliness. Content may be modified,
          updated, or removed at any time without prior notice.
        </p>
      </section>

      <section>
        <h2>External Links</h2>
        <p>
          Our website may include links to third-party websites or services.
          These links are provided for convenience only. We do not control,
          endorse, or assume responsibility for the content, privacy policies,
          or practices of any external sites.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          Under no circumstances shall FunFriday, its owners, or contributors
          be liable for any direct, indirect, incidental, consequential, or
          special damages arising from:
        </p>
        <ul>
          <li>Use or inability to use the website</li>
          <li>Errors or omissions in content</li>
          <li>Technical interruptions or downtime</li>
          <li>Reliance on information provided</li>
        </ul>
      </section>

      <section>
        <h2>Advertising & Third-Party Services</h2>
        <p>
          This website may display advertisements through third-party
          advertising networks such as Google AdSense. Advertisements are
          served by external providers, and we do not control or guarantee the
          accuracy, safety, or relevance of advertised content.
        </p>
      </section>

      <section>
        <h2>Changes to This Disclaimer</h2>
        <p>
          We reserve the right to update or modify this Disclaimer at any time
          without prior notice. Continued use of the website following any
          changes constitutes acceptance of those modifications.
        </p>
      </section>

      <section className="final-note">
        <p>
          If you do not agree with this Disclaimer, please discontinue use of
          the website immediately.
        </p>
      </section>
    </div>
  );
};

export default Disclaimer;
