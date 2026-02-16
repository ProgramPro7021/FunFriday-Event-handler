import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet";
import "../css/DumbCharades.css";

const DumbCharades = () => {
  const [team, setTeam] = useState("Team A");
  const [timer, setTimer] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const countdownRef = useRef(null);

  const startGame = () => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }

    setIsPlaying(true);
    setTimer(60);

    countdownRef.current = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          setIsPlaying(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  const switchTeam = () => {
    setTeam(team === "Team A" ? "Team B" : "Team A");
  };

  return (
    <div className="container">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Dumb Charades Game – Fun Team Building Activity</title>
        <meta
          name="description"
          content="Play Dumb Charades online with a built-in timer. Perfect for office Fun Friday, team building sessions, classrooms, and group activities."
        />
        <meta
          name="keywords"
          content="dumb charades game, team building games, office fun friday, party games, classroom activities"
        />
      </Helmet>

      {/* ================= CONTENT SECTION ================= */}

      <section className="charades-content">
        <h1>Dumb Charades – Classic Team Building Game</h1>

        <p>
          Dumb Charades is one of the most popular group games for team
          building, office Fun Friday sessions, classroom activities, and
          social gatherings. The objective is simple: one player acts out a
          movie title without speaking, while their team tries to guess it
          within the time limit.
        </p>

        <p>
          This online Dumb Charades timer helps you manage rounds easily.
          Whether you're hosting a corporate team activity or a casual party,
          this tool keeps the game organized and fair.
        </p>

        <h2>How to Play Dumb Charades</h2>

        <ul>
          <li>Divide players into two teams.</li>
          <li>One player from the active team acts out a movie silently.</li>
          <li>Their team must guess within 60 seconds.</li>
          <li>No speaking, lip movements, or writing allowed.</li>
          <li>Switch teams after each round.</li>
        </ul>

        <h2>Why Dumb Charades is Perfect for Team Building</h2>

        <p>
          Dumb Charades encourages creativity, non-verbal communication,
          collaboration, and quick thinking. It helps teams break barriers,
          improve coordination, and build stronger relationships in a relaxed
          and enjoyable environment.
        </p>

        <p>
          Short game sessions can significantly improve engagement and morale,
          especially during corporate events or weekly Fun Friday activities.
        </p>

        <h2>Tips for a Successful Charades Session</h2>

        <ul>
          <li>Choose movies suitable for your audience.</li>
          <li>Set clear rules before starting.</li>
          <li>Use a timer for fairness.</li>
          <li>Keep the atmosphere energetic and positive.</li>
          <li>Track scores to increase competition.</li>
        </ul>
      </section>

      {/* ================= GAME SECTION ================= */}

      <section className="charades-game">
        <div className="infoBox">
          <p><strong>Current Team:</strong> {team}</p>
          <p><strong>Timer:</strong> {timer} seconds</p>
        </div>

        <div className="buttonGroup">
          <button
            className="button"
            onClick={startGame}
            disabled={isPlaying && timer > 0}
          >
            {isPlaying ? "Restart Round" : "Start Round"}
          </button>

          <button className="button" onClick={switchTeam}>
            Switch Team
          </button>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}

      <section className="charades-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this Dumb Charades game free?</h3>
        <p>
          Yes, this online timer tool is completely free to use for office,
          school, and party events.
        </p>

        <h3>Can I use this for corporate events?</h3>
        <p>
          Absolutely. It is ideal for corporate team building activities and
          employee engagement sessions.
        </p>

        <h3>Does it work on mobile devices?</h3>
        <p>
          Yes. The game is responsive and works smoothly on mobile, tablet,
          and desktop.
        </p>
      </section>

    </div>
  );
};

export default DumbCharades;
