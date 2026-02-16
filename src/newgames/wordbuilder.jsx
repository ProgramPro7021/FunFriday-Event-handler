import React, { useState, useEffect } from "react";
import "../css/WordBuilder.css";

const words = [
  "REACT",
  "JAVASCRIPT",
  "PYTHON",
  "ELEPHANT",
  "COMPUTER",
  "CRICKET",
];

const WordBuilder = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [scrambledWord, setScrambledWord] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Shuffle letters
  const shuffleWord = (word) => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
  };

  const startGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setScrambledWord(shuffleWord(randomWord));
    setInput("");
    setScore(0);
    setTimeLeft(30);
    setStarted(true);
    setGameOver(false);
    setMessage("");
  };

  // Timer
  useEffect(() => {
    if (!started || gameOver) return;

    if (timeLeft === 0) {
      setGameOver(true);
      setStarted(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started, gameOver]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.toUpperCase() === currentWord) {
      setScore((prev) => prev + 1);
      setMessage("✅ Correct!");
    } else {
      setMessage("❌ Try Again");
      return;
    }

    // Next word
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setCurrentWord(randomWord);
    setScrambledWord(shuffleWord(randomWord));
    setInput("");
  };

  const resetGame = () => {
    setStarted(false);
    setGameOver(false);
    setScore(0);
    setTimeLeft(30);
    setInput("");
    setMessage("");
  };

  return (
    <div className="wordbuilder-page">

      {/* ================= SEO CONTENT ================= */}
      <section className="wordbuilder-content">
        <h1>🧩 Word Builder Game – Unscramble the Word</h1>
        <p>
          Word Builder is a fun and interactive word scramble game.
          Rearrange the scrambled letters to form the correct word
          before time runs out.
        </p>

        <h2>How to Play</h2>
        <ul>
          <li>Click "Start Game" to begin.</li>
          <li>Unscramble the letters shown.</li>
          <li>Type your answer and submit.</li>
          <li>Score points for each correct word.</li>
        </ul>

        <h2>Benefits of Word Games</h2>
        <p>
          Word games improve vocabulary, spelling, and cognitive
          flexibility. They are great for classrooms, team activities,
          and brain training sessions.
        </p>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="wordbuilder-container">

        {!started && !gameOver && (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        )}

        {started && (
          <>
            <div className="game-header">
              <h3>Score: {score}</h3>
              <h3>Time Left: {timeLeft}s</h3>
            </div>

            <h2 className="scrambled">{scrambledWord}</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your answer"
              />
              <button type="submit">Submit</button>
            </form>

            {message && <p className="message">{message}</p>}
          </>
        )}

        {gameOver && (
          <div className="result-box">
            <h2>⏰ Time’s Up!</h2>
            <p>Your Final Score: <strong>{score}</strong></p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}

      </section>

      {/* ================= FAQ ================= */}
      <section className="wordbuilder-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this word game free?</h3>
        <p>Yes, Word Builder is completely free to play online.</p>

        <h3>Can kids play this game?</h3>
        <p>
          Yes, this word scramble game is suitable for students
          and adults who want to improve vocabulary skills.
        </p>

        <h3>Does it work on mobile devices?</h3>
        <p>
          Yes, the game is fully responsive and works on phones,
          tablets, and desktops.
        </p>
      </section>

    </div>
  );
};

export default WordBuilder;
