import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
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
      description:
        "Automatically divide participants into balanced teams.",
    },
    {
      title: "⏱ Built-in Timer",
      description:
        "Manage rounds smoothly with built-in countdown timers.",
    },
  ];

  const games = [
    {
      title: "Rapid Fire Quiz",
      description: "Answer maximum questions in 60 seconds.",
      path: "/rapidfire",
    },
    {
      title: "Dumb Charades",
      description: "Act and guess movies without speaking.",
      path: "/dumb-charades",
    },
    {
      title: "Emoji Guess",
      description: "Guess movies and phrases using emojis.",
      path: "/emoji-guess",
    },
  ];

  return (
    <div className="home">

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
            Organize engaging team games, split teams instantly,
            and manage countdown timers effortlessly —
            all in one simple platform.
          </motion.p>

          <motion.div className="hero-buttons" variants={fadeUp}>
            <button onClick={() => navigate("/ideas")}>
              🎮 Explore Games
            </button>

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



      {/* ================= ABOUT ================= */}
<section className="about">
  <motion.div
    className="about-container"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
  >
    <motion.h2 variants={fadeUp}>
      What Is FunFriday?
    </motion.h2>

    <motion.p variants={fadeUp} className="about-description">
      FunFriday is a simple platform designed to make team bonding effortless.
      Whether you're organizing office activities, classroom competitions,
      or casual friend meetups — we provide ready-to-play games,
      instant team splitting, and built-in timers to run everything smoothly.
    </motion.p>

    <motion.div className="about-boxes" variants={staggerContainer}>
      <motion.div className="about-box" variants={fadeUp}>
        <h3>🎯 Easy Game Hosting</h3>
        <p>
          Launch engaging games in seconds without setup complexity.
        </p>
      </motion.div>

      <motion.div className="about-box" variants={fadeUp}>
        <h3>⚡ Fast & Simple</h3>
        <p>
          No accounts, no delays — just open and start playing instantly.
        </p>
      </motion.div>

      <motion.div className="about-box" variants={fadeUp}>
        <h3>🤝 Perfect for Teams</h3>
        <p>
          Ideal for offices, schools, and group events.
        </p>
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
        <button onClick={() => navigate(game.path)}>
          Play Now
        </button>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* ================= CTA ================= */}
  {/* ================= CTA ================= */}
<section className="cta">
  <motion.div
    className="cta-container"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2>
      Ready to Turn Your Team Into Champions? 🏆
    </h2>

    <p>
      Launch games, split teams, and create unforgettable Friday moments —
      all in under 30 seconds.
    </p>

    <div className="cta-buttons">
      <button
        className="primary"
        onClick={() => navigate("/ideas")}
      >
        🚀 Start Playing Now
      </button>

      <button
        className="secondary"
        onClick={() => navigate("/splitTeam")}
      >
        👥 Split Teams First
      </button>
    </div>
  </motion.div>

  {/* Dancing Emoji Section */}
  <motion.div
    className="emoji-party"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.4 }}
    viewport={{ once: true }}
  >
    <span>💃</span>
    <span>🕺</span>
    <span>🎉</span>
    <span>🔥</span>
    <span>🎊</span>
  </motion.div>
</section>


    </div>
  );
};

export default Home;
