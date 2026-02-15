import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [player , setplayer ] = useState("")

  // Timer Logic
  useEffect(() => {
    if (!isPlaying) return;

    if (time === 0) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setTime(time - 1);
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

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
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

      <h1>Rapid Fire Challenge</h1>

      {!isPlaying && !gameOver && (
        <button className="start-btn" onClick={startGame}>
          Start Game
        </button>
      )}

      {isPlaying && (
        <div className="game-box">
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
        </div>
      )}

      {gameOver && (
        <div className="game-over">
          <h2>Game Over 🎉</h2>
          <p>Your Final Score: {score}</p>
          <button onClick={startGame}>Play Again</button>
        </div>
      )}
    </section>
  );
};

export default RapidFire;
