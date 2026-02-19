import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { useTeam } from "../context/TeamContext";
import TeamTurnBanner from "../components/TeamTurnBanner";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/Rapidfire.css";

const questions = [
  {
    question: "Capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris"
  },
  {
    question: "5 + 7 = ?",
    options: ["10", "12", "14", "11"],
    answer: "12"
  },
  {
    question: "Fastest land animal?",
    options: ["Lion", "Cheetah", "Tiger", "Leopard"],
    answer: "Cheetah"
  },
  {
    question: "React is a ___ ?",
    options: ["Library", "Language", "Database", "Server"],
    answer: "Library"
  }
];

const RapidFire = () => {
<<<<<<< HEAD
  const { hasTeams, nextTurn } = useTeam();
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (!isPlaying) return;

    if (time === 0) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, isPlaying]);

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setCurrent(0);
    setTime(30);
  };

<<<<<<< HEAD
  const handlePlayAgain = () => {
    if (hasTeams) nextTurn();
    startGame();
  };

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setGameOver(true);
      setIsPlaying(false);
    }
  };

  return (
    <section className="rapidfire">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Rapid Fire Quiz Game – Fast-Paced Team Challenge</title>
        <meta
          name="description"
          content="Play the Rapid Fire Quiz Game online. A fast-paced team challenge perfect for office Fun Friday, classrooms, and team building activities."
        />
        <meta
          name="keywords"
          content="rapid fire quiz, team building quiz, office games, fun friday activities, classroom quiz game"
        />
      </Helmet>

      {/* ================= CONTENT SECTION ================= */}

      <div className="rapidfire-content">

        <h1>Rapid Fire Quiz – Fast-Paced Team Challenge</h1>

        <p>
          The Rapid Fire Quiz is a high-energy question-and-answer game designed
          to test knowledge, speed, and focus under pressure. Ideal for office
          team building sessions, classroom activities, and social gatherings,
          this challenge keeps participants engaged with quick questions and a
          ticking timer.
        </p>

        <p>
          Players must answer as many questions as possible within the time
          limit. The faster and more accurately you respond, the higher your
          final score.
        </p>

        <h2>How to Play the Rapid Fire Game</h2>

        <ul>
          <li>Click the “Start Game” button to begin.</li>
          <li>You have 30 seconds to answer all questions.</li>
          <li>Select the correct option for each question.</li>
          <li>Each correct answer increases your score.</li>
          <li>The game ends when time runs out or questions are completed.</li>
        </ul>

        <h2>Why Rapid Fire Works for Team Building</h2>

        <p>
          Rapid Fire quizzes stimulate quick thinking and decision-making.
          During office Fun Friday sessions, this format encourages friendly
          competition while promoting knowledge sharing.
        </p>

        <p>
          The time-based pressure creates excitement and engagement, making it
          perfect for energizing meetings or training sessions.
        </p>

        <h2>Benefits of Time-Based Quiz Games</h2>

        <ul>
          <li>Improves reaction speed</li>
          <li>Encourages healthy competition</li>
          <li>Boosts team engagement</li>
          <li>Enhances focus under pressure</li>
          <li>Creates a fun learning environment</li>
        </ul>

      </div>

      {/* ================= GAME SECTION ================= */}

      <div className="rapidfire-game">

<<<<<<< HEAD
        <TeamTurnBanner showNextButton={false} />

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
        {!isPlaying && !gameOver && (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        )}

        {isPlaying && (
          <motion.div
            className="game-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="top-bar">
              <span>⏳ Time: {time}s</span>
              <span>🏆 Score: {score}</span>
            </div>

            <h2>{questions[current].question}</h2>

            <div className="options">
              {questions[current].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {gameOver && (
          <div className="game-over">
            <h2>Game Over 🎉</h2>
            <p>Your Final Score: {score}</p>
<<<<<<< HEAD
            <button onClick={handlePlayAgain}>Play Again</button>
=======
            <button onClick={startGame}>Play Again</button>
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
          </div>
        )}

      </div>

      {/* ================= FAQ SECTION ================= */}

      <div className="rapidfire-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this Rapid Fire quiz free?</h3>
        <p>
          Yes. The Rapid Fire Quiz is completely free and accessible online
          without registration.
        </p>

        <h3>Can this be used for corporate events?</h3>
        <p>
          Absolutely. It works well for corporate team building sessions,
          training programs, and employee engagement events.
        </p>

        <h3>Does it work on mobile devices?</h3>
        <p>
          Yes. The quiz is responsive and works on smartphones, tablets,
          and desktops.
        </p>
      </div>

    </section>
  );
};

export default RapidFire;
