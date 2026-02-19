import React from "react";
import "../css/Legal.css";

const Terms = () => {
  return (
    <div className="legal-page">
      <h1>Terms & Conditions</h1>

      <section>
        <p>
          By accessing and using <strong>FunFriday</strong>, you accept and agree
          to be bound by the terms and conditions outlined below. If you do not
          agree, please discontinue use of the website immediately.
        </p>
      </section>

      <section>
        <h2>Use License</h2>
        <p>
          Permission is granted to temporarily use the tools and content on
          FunFriday for personal, non-commercial use only. This license does not
          allow:
        </p>
        <ul>
          <li>Modification or redistribution of content</li>
          <li>Commercial use of tools or materials</li>
          <li>Reverse engineering or misuse of features</li>
          <li>Removal of copyright or proprietary notices</li>
        </ul>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>
          Users agree to use FunFriday in a manner that is lawful, respectful,
          and consistent with workplace ethics. You must not:
        </p>
        <ul>
          <li>Engage in harmful or disruptive activities</li>
          <li>Upload malicious code or attempt to hack the platform</li>
          <li>Use FunFriday for harassment or inappropriate behavior</li>
        </ul>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          FunFriday, its owners, and contributors shall not be held responsible
          for any damages arising from:
        </p>
        <ul>
          <li>Use or inability to use the website</li>
          <li>Errors or omissions in content</li>
          <li>Technical interruptions or downtime</li>
          <li>Reliance on information provided</li>
        </ul>
      </section>

      <section>
        <h2>Modifications</h2>
        <p>
          We reserve the right to revise these terms at any time without prior
          notice. Continued use of the website following changes constitutes
          acceptance of the updated terms.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes arising under these
          terms shall be subject to the exclusive jurisdiction of the courts in
          Mumbai, Maharashtra.
        </p>
      </section>

      <section className="final-note">
        <p>
          By using <strong>FunFriday</strong>, you acknowledge that you have read,
          understood, and agreed to these Terms & Conditions.
        </p>
      </section>
    </div>
  );
};

export default Terms;