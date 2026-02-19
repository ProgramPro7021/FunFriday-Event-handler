import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/FastestFinger.css";

const questionsData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
    answer: "Bill Gates",
  },
  {
    question: "Which country won the 2011 Cricket World Cup?",
    options: ["Australia", "India", "England", "Pakistan"],
    answer: "India",
  },
];

const FastestFinger = () => {
  const [teamName, setTeamName] = useState("");
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (!started || showResult || gameOver) return;

    if (timeLeft === 0) {
      setShowResult(true);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started, showResult, gameOver]);

  const startGame = () => {
    if (teamName.trim() === "") return;
    setStarted(true);
  };

  const handleAnswer = (option) => {
    if (showResult) return;

    setSelected(option);
    setShowResult(true);

    if (option === questionsData[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelected(null);
      setShowResult(false);
      setTimeLeft(10);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setTimeLeft(10);
    setGameOver(false);
  };

  return (
    <div className="fastest-page">

<<<<<<< HEAD
      {/* ================= SEO META SECTION ================= */}
      <Helmet>
        <title>Fastest Finger First Quiz Game – Speed Challenge</title>
        <meta
          name="description"
          content="Play Fastest Finger First, an exciting speed-based quiz game. Answer questions quickly before the timer runs out. Perfect for team building and competitive quiz challenges."
        />
        <meta
          name="keywords"
          content="fastest finger quiz, speed quiz game, team quiz, quiz competition, team building games, fun friday activities"
        />
      </Helmet>

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      {/* ================= SEO CONTENT SECTION ================= */}
      <section className="fastest-content">
        <h1>⚡ Fastest Finger First Quiz Game</h1>
        <p>
          Test your speed and knowledge with this exciting Fastest Finger
          First quiz game. Answer questions before the timer runs out and
          score points for correct answers.
        </p>

        <h2>How to Play</h2>
        <ul>
          <li>Enter your team name and start the game.</li>
          <li>You have 10 seconds to answer each question.</li>
          <li>Select the correct option before time runs out.</li>
          <li>Each correct answer earns one point.</li>
        </ul>

        <h2>Why Play Speed Quiz Games?</h2>
        <p>
          Fast-paced quiz games improve reaction time, decision-making
          ability, and general knowledge recall. Perfect for classroom
          activities, team competitions, or fun Friday sessions.
        </p>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="fastest-container">

        {!started && (
          <div className="start-box">
            <input
              type="text"
              placeholder="Enter Team Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <button onClick={startGame}>Start Game</button>
          </div>
        )}

        {started && !gameOver && (
          <>
            <div className="game-header">
              <h3>Team: {teamName}</h3>
              <h3>Score: {score}</h3>
              <h3>Time Left: {timeLeft}s</h3>
            </div>

            <div className="question-box">
              <h2>{questionsData[currentQuestion].question}</h2>

              <div className="options">
                {questionsData[currentQuestion].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      className={`option-btn ${
                        showResult
                          ? option ===
                            questionsData[currentQuestion].answer
                            ? "correct"
                            : option === selected
                            ? "wrong"
                            : ""
                          : ""
                      }`}
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>

            {showResult && (
              <button className="next-btn" onClick={nextQuestion}>
                {currentQuestion + 1 < questionsData.length
                  ? "Next Question"
                  : "Finish Game"}
              </button>
            )}
          </>
        )}

        {gameOver && (
          <div className="result-box">
            <h2>🎉 Game Over!</h2>
            <p>
              Team <strong>{teamName}</strong> scored{" "}
              <strong>{score}</strong> out of{" "}
              <strong>{questionsData.length}</strong>
            </p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="fastest-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this quiz game free?</h3>
        <p>Yes, this Fastest Finger First quiz is completely free to play.</p>

        <h3>Can it be used for classroom activities?</h3>
        <p>
          Absolutely. Teachers and trainers can use this quiz format
          for interactive learning sessions.
        </p>

        <h3>Does it work on mobile devices?</h3>
        <p>
          Yes, the quiz is fully responsive and works on smartphones,
          tablets, and desktops.
        </p>
      </section>

    </div>
  );
};

export default FastestFinger;
