import React, { useRef, useState, useEffect } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import { useTeam } from "../context/TeamContext";
import TeamTurnBanner from "../components/TeamTurnBanner";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/Sketch.css";

const words = ["Elephant", "Car", "Laptop", "Tree", "Cricket", "House"];

const Sketch = () => {
<<<<<<< HEAD
  const { hasTeams, nextTurn } = useTeam();
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [brushSize, setBrushSize] = useState(5);
  const [timeLeft, setTimeLeft] = useState(60);
  const [started, setStarted] = useState(false);
  const [word, setWord] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Initialize canvas when started
  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current;
    const containerWidth = canvas.parentElement.offsetWidth;

    canvas.width = containerWidth;
    canvas.height = 450;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    ctxRef.current = context;
  }, [started]);

  // Update brush dynamically
  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
      ctxRef.current.lineWidth = brushSize;
    }
  }, [color, brushSize]);

  // Timer Logic (stable)
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

  const startGame = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
    setTimeLeft(60);
    setStarted(true);
    setGameOver(false);
    setTimeout(() => clearCanvas(), 0);
  };

  const startDrawing = ({ nativeEvent }) => {
    if (!started) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    ctxRef.current.lineTo(offsetX, offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    if (ctxRef.current) ctxRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas || !ctxRef.current) return;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const resetGame = () => {
<<<<<<< HEAD
    if (hasTeams) nextTurn();
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
    setStarted(false);
    setGameOver(false);
    setTimeLeft(60);
    setWord("");
    clearCanvas();
  };

  return (
    <div className="sketch-page">

<<<<<<< HEAD
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Sketch & Guess Drawing Game – Team Fun Activity</title>
        <meta
          name="description"
          content="Play Sketch & Guess, a fun drawing game where you draw random words against the clock. Perfect for team building, office Fun Fridays, and classrooms."
        />
        <meta
          name="keywords"
          content="sketch game, drawing game, guess game, team building games, office games, fun friday activities, classroom games"
        />
      </Helmet>

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      {/* ================= SEO CONTENT ================= */}
      <section className="sketch-content">
        <h1>🎨 Sketch & Guess Drawing Game</h1>
        <p>
          Sketch & Guess is a fun drawing game where players draw a
          random word before the timer runs out. It’s perfect for
          team-building activities, classroom fun, or casual Friday
          office sessions.
        </p>

        <h2>How to Play</h2>
        <ul>
          <li>Click "Start Game" to get a random word.</li>
          <li>You have 60 seconds to draw it.</li>
          <li>Use color and brush size controls.</li>
          <li>Clear the canvas anytime if needed.</li>
        </ul>

        <h2>Why Play Drawing Games?</h2>
        <p>
          Drawing games improve creativity, visual thinking, and
          communication skills. They also increase engagement and
          teamwork during group activities.
        </p>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="sketch-container">

<<<<<<< HEAD
        <TeamTurnBanner showNextButton={false} />

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
        {!started && !gameOver && (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        )}

        {started && (
          <>
            <div className="game-header">
              <h2>Draw This: {word}</h2>
              <h3>Time Left: {timeLeft}s</h3>
            </div>

            <div className="controls">
              <label>
                Color:
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </label>

              <label>
                Brush Size:
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={brushSize}
                  onChange={(e) =>
                    setBrushSize(Number(e.target.value))
                  }
                />
              </label>

              <button onClick={clearCanvas}>Clear</button>
            </div>

            <canvas
              ref={canvasRef}
              className="canvas"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
            />
          </>
        )}

        {gameOver && (
          <div className="result-box">
            <h2>⏰ Time’s Up!</h2>
            <p>The word was: <strong>{word}</strong></p>
            <button onClick={resetGame}>Play Again</button>
          </div>
        )}

      </section>

      {/* ================= FAQ ================= */}
      <section className="sketch-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this drawing game free?</h3>
        <p>Yes, Sketch & Guess is completely free to play online.</p>

        <h3>Does it work on mobile?</h3>
        <p>
          Yes, the canvas is responsive and works on modern mobile
          browsers.
        </p>

        <h3>Can it be used for team activities?</h3>
        <p>
          Absolutely. It is ideal for classroom games, corporate fun
          Fridays, and virtual team-building sessions.
        </p>
      </section>

    </div>
  );
};

export default Sketch;
