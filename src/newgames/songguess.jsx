import React, { useState } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/SongGuess.css";

const SongGuess = () => {
  const songs = [
    { hint: "🎵 'Cause baby you're a firework...", answer: "firework" },
    { hint: "🎵 Just a small town girl, living in a lonely world...", answer: "dont stop believin" },
    { hint: "🎵 Is this the real life? Is this just fantasy?", answer: "bohemian rhapsody" },
    { hint: "🎵 I'm a survivor, I'm not gonna give up...", answer: "survivor" },
    { hint: "🎵 Hello from the other side...", answer: "hello" },
  ];

  const [currentSong, setCurrentSong] = useState(null);
  const [userGuess, setUserGuess] = useState("");
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    const random = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(random);
    setScore(0);
    setMessage("");
    setUserGuess("");
    setGameOver(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentSong) return;

    if (userGuess.toLowerCase().trim() === currentSong.answer) {
      setScore(score + 1);
      setMessage("✅ Correct! New song loaded.");
    } else {
      setMessage(`❌ Wrong! Correct answer was "${currentSong.answer}"`);
      setGameOver(true);
      return;
    }

    const next = songs[Math.floor(Math.random() * songs.length)];
    setCurrentSong(next);
    setUserGuess("");
  };

  return (
    <div className="songguess-page">

<<<<<<< HEAD
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Song Guess Game – Guess Songs from Lyrics</title>
        <meta
          name="description"
          content="Play Song Guess, a fun music quiz where you guess songs from lyric hints. Test your music knowledge and have fun with friends. Perfect for team building activities."
        />
        <meta
          name="keywords"
          content="song guess game, music quiz, lyric quiz, music trivia, team building games, office games, fun friday activities"
        />
      </Helmet>

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      {/* ================= SEO CONTENT ================= */}
      <section className="songguess-content">
        <h1>Song Guess Game – Guess the Song from Lyrics</h1>
        <p>
          Test your music knowledge with our free Song Guess game. Read a lyric hint
          and try to guess the correct song title. This fun online music quiz
          challenges your memory, improves listening skills, and is perfect for
          music lovers of all ages.
        </p>

        <h2>How to Play the Song Guess Game</h2>
        <ul>
          <li>Click "Start Game" to begin.</li>
          <li>Read the lyric hint carefully.</li>
          <li>Type the correct song title.</li>
          <li>Earn points for each correct answer.</li>
        </ul>

        <h2>Why Play Music Guessing Games?</h2>
        <p>
          Music guessing games boost memory recall, improve focus, and make
          learning fun. They are great for classroom activities, office Fun Friday
          sessions, and online entertainment.
        </p>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="songguess-container">
        {!currentSong && !gameOver && (
          <button className="start-btn" onClick={startGame}>
            Start Game
          </button>
        )}

        {currentSong && !gameOver && (
          <div className="game-area">
            <div className="game-header">
              <span>Score: {score}</span>
            </div>

            <p className="hint">{currentSong.hint}</p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter song title..."
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
            </form>

            <p className="message">{message}</p>
          </div>
        )}

        {gameOver && (
          <div className="result-box">
            <h2>Game Over</h2>
            <p>Your final score: {score}</p>
            <button onClick={startGame}>Play Again</button>
          </div>
        )}
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="songguess-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this Song Guess game free?</h3>
        <p>Yes, the game is completely free to play online.</p>

        <h3>Can I use this for classroom activities?</h3>
        <p>
          Absolutely. Music quizzes are great for engaging students and
          encouraging participation.
        </p>

        <h3>Does this game improve memory?</h3>
        <p>
          Yes. Guessing songs from lyrics activates recall memory and strengthens
          cognitive skills.
        </p>
      </section>

    </div>
  );
};

export default SongGuess;
