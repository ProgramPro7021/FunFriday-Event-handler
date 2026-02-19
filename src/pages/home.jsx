import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AdUnit from "../components/AdUnit";
import "../css/Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "🎮 Engaging Team Games",
      description:
        "Carefully selected games designed to boost energy and collaboration.",
    },
    {
      title: "👥 Instant Team Split",
      description: "Automatically divide participants into balanced teams.",
    },
    {
      title: "⏱ Built-in Timer",
      description: "Manage rounds smoothly with built-in countdown timers.",
    },
  ];

  const games = [
    {
      title: "Emoji Guess",
      description: "Guess movies and phrases using emojis.",
      path: "/emoji",
    },

    {
      title: "Dumb Charades",
      description: "Act and guess movies without speaking.",
      path: "/dumbCharades",
    },

    {
      title: "Rapid Fire",
      description: "Quick-fire questions to test knowledge.",
      path: "/rapidfire",
    },
  ];

  return (
    <div className="home">
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>FunFriday | Free Team Building Games & Activities</title>
        <meta
          name="description"
          content="FunFriday is your platform for fun team games, instant team splitter, and countdown timers. Perfect for office Fun Friday events, classrooms, and team building activities."
        />
        <meta
          name="keywords"
          content="team building games, fun friday activities, office games, team games, classroom games, group games, party games"
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp}>
            Turn Every Friday Into a <span>Fun Battle</span> 🎉
          </motion.h1>

          <motion.p variants={fadeUp}>
            Organize engaging team games, split teams instantly, and manage
            countdown timers effortlessly — all in one simple platform.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <button onClick={() => navigate("/ideas")}>🎮 Explore Games</button>

            <button
              className="secondary"
              onClick={() => navigate("/splitTeam")}
            >
              👥 Split Teams
            </button>
          </motion.div>

          <motion.div className="hero-badges" variants={fadeUp}>
            <span>✔ Free to Use </span>
            <span>✔ No Signup</span>
            <span>✔ Instant Setup</span>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= education ================= */}
      <section className="education">
        <div className="section-header">
          <h2>Why Team Building Activities Matter in Modern Workplaces</h2>
        </div>

        <div className="education-content">
          <p>
            Team building activities are more than just entertainment. In modern
            workplaces, structured group games improve communication, reduce
            stress, and strengthen collaboration between departments. When
            employees engage in friendly competition, it builds trust and
            encourages open interaction.
          </p>

          <p>
            Regular fun sessions like Fun Friday activities help break routine
            work patterns and improve morale. Short interactive games stimulate
            quick thinking, leadership skills, and decision-making under
            pressure.
          </p>

          <p>
            Whether you manage a startup team, corporate office, or classroom,
            structured group games can significantly increase productivity and
            workplace happiness.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <motion.div
          className="about-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp}>What Is FunFriday?</motion.h2>

          <motion.p variants={fadeUp} className="about-description">
            FunFriday is a simple platform designed to make team bonding
            effortless. Whether you're organizing office activities, classroom
            competitions, or casual friend meetups — we provide ready-to-play
            games, instant team splitting, and built-in timers to run everything
            smoothly.
          </motion.p>

          <motion.div className="about-boxes" variants={staggerContainer}>
            <motion.div className="about-box" variants={fadeUp}>
              <h3>🎯 Easy Game Hosting</h3>
              <p>Launch engaging games in seconds without setup complexity.</p>
            </motion.div>

            <motion.div className="about-box" variants={fadeUp}>
              <h3>⚡ Fast & Simple</h3>
              <p>
                No accounts, no delays — just open and start playing instantly.
              </p>
            </motion.div>

            <motion.div className="about-box" variants={fadeUp}>
              <h3>🤝 Perfect for Teams</h3>
              <p>Ideal for offices, schools, and group events.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">
        <div className="section-header">
          <h2>Key Features</h2>
          <p>Everything you need to run fun and competitive team games</p>
        </div>

        <motion.div
          className="feature-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={fadeUp}
              whileHover={{ y: -6 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= guide ================= */}
      <section className="guide">
        <div className="section-header">
          <h2>How to Organize a Perfect Fun Friday Session</h2>
        </div>

        <div className="guide-content">
          <h3>1. Choose the Right Game</h3>
          <p>
            Select games based on team size and energy level. Quick rounds like
            Rapid Fire are ideal for fast-paced teams, while games like Dumb
            Charades encourage creativity.
          </p>

          <h3>2. Split Teams Fairly</h3>
          <p>
            Balanced teams create healthy competition. Use instant team split
            tools to randomly divide participants for fairness.
          </p>

          <h3>3. Set Clear Rules</h3>
          <p>
            Before starting, explain rules and time limits clearly to avoid
            confusion during gameplay.
          </p>

          <h3>4. Encourage Participation</h3>
          <p>
            The goal is engagement. Ensure everyone gets a chance to participate
            and contribute.
          </p>
        </div>
      </section>

      {/* ================= POPULAR ================= */}
      <section className="popular">
        <div className="section-header">
          <h2>Popular Games</h2>
          <p>Quick, fun, and perfect for team competitions</p>
        </div>

        <motion.div
          className="game-preview"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {games.map((game, index) => (
            <motion.div
              key={index}
              className="game-card"
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{game.title}</h3>
              <p>{game.description}</p>
              <button onClick={() => navigate(game.path)}>Play Now</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* AdSense: set VITE_ADSENSE_SLOT in .env when you have ad unit slot IDs */}
      <AdUnit slot={import.meta.env.VITE_ADSENSE_SLOT || ""} />

      {/* ================= CTA ================= */}

      <section className="homepage-intro">
        <h2>Fun Friday Emoji Collection for Work & Online Chats</h2>

        <p>
          Welcome to FunFriday, your ultimate destination for copy-and-paste
          workplace-friendly emojis and expressions. Whether you're celebrating
          a team win, reacting to a project update, or simply sharing Friday
          excitement, our platform makes it quick and easy to add personality to
          your digital conversations.
        </p>

        <p>
          Modern communication happens across platforms like Slack, Microsoft
          Teams, WhatsApp, and email. While these tools improve efficiency,
          text-only communication can often feel impersonal. Emojis help bring
          tone, clarity, and positivity into conversations.
        </p>

        <p>
          At FunFriday, we provide curated emoji collections designed
          specifically for professional and casual digital environments. Our
          categories include celebration emojis, motivational reactions, team
          appreciation icons, positive vibes symbols, and Friday-themed
          expressions.
        </p>

        <h2>Why Use Emojis at Work?</h2>

        <p>
          Studies in workplace communication suggest that adding appropriate
          visual cues such as emojis can reduce misunderstandings and strengthen
          team engagement. A simple thumbs-up or celebration emoji can
          communicate tone more clearly than plain text.
        </p>

        <ul>
          <li>Improve clarity in digital communication</li>
          <li>Encourage team engagement</li>
          <li>Add friendly tone to messages</li>
          <li>Celebrate achievements quickly</li>
          <li>Boost Friday morale</li>
        </ul>

        <h2>How FunFriday Works</h2>

        <p>
          Using FunFriday is simple. Browse categories, click on any emoji or
          expression, and paste it directly into your chat or message. No login,
          no downloads, and completely free to use.
        </p>

        <p>
          Our goal is to provide a fast, clean, and reliable emoji collection
          optimized for everyday digital communication.
        </p>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <motion.div
          className="cta-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Ready to Turn Your Team Into Champions?</h2>
          <p>
            Launch games, split teams, and create unforgettable Friday moments —
            all in under 30 seconds.
          </p>
          <div className="cta-buttons">
            <button className="primary" onClick={() => navigate("/ideas")}>
              Start Playing
            </button>
            <button className="secondary" onClick={() => navigate("/splitTeam")}>
              Split Teams
            </button>
          </div>
        </motion.div>

        {/* FAQ Cards */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is FunFriday free to use?</h3>
              <p>Yes, all games are free and accessible directly in your browser.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need an account?</h3>
              <p>No signup required. Open the site and start playing.</p>
            </div>
            <div className="faq-item">
              <h3>Can these games be used in offices?</h3>
              <p>Yes, designed for corporate team-building sessions.</p>
            </div>
            <div className="faq-item">
              <h3>Are the games suitable for classrooms?</h3>
              <p>Yes, teachers can use these for educational and recreational purposes.</p>
            </div>
          </div>
        </div>

        {/* Trust Strip */}
        <motion.div
          className="trust-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="trust-strip-divider" />
          <p className="trust-strip-text">
            <span>Free</span>
            <span className="trust-dot">·</span>
            <span>No Signup</span>
            <span className="trust-dot">·</span>
            <span>Privacy-first</span>
          </p>
          <p className="trust-strip-tagline">Built for teams that play together</p>
          <div className="trust-strip-divider" />
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
