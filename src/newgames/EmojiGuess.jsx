import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useTeam } from "../context/TeamContext";
import TeamTurnBanner from "../components/TeamTurnBanner";
import "../css/EmojiGuess.css";

const EmojiGuess = () => {
  const { hasTeams, nextTurn } = useTeam();
  const emojiMovies = [
    { emoji: "🦁👑", answer: "The Lion King" },
    { emoji: "🧙‍♂️🪄⚡", answer: "Harry Potter" },
    { emoji: "🚢❄️💔", answer: "Titanic" },
    { emoji: "🦖🏞️", answer: "Jurassic Park" },
    { emoji: "👽📞🏠", answer: "E.T." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (
      guess.trim().toLowerCase() ===
      emojiMovies[currentIndex].answer.toLowerCase()
    ) {
      setMessage("✅ Correct! Great job!");
    } else {
      setMessage("❌ Try again!");
    }
  };

  const nextEmoji = () => {
    setMessage("");
    setGuess("");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % emojiMovies.length);
    if (hasTeams) nextTurn();
  };

  return (
    <div className="emoji-page">

      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Emoji Guess Game – Fun Movie Emoji Puzzle for Teams</title>
        <meta
          name="description"
          content="Play Emoji Guess, a fun movie emoji puzzle game perfect for team building, office fun Fridays, classrooms, and group activities. No signup required."
        />
        <meta
          name="keywords"
          content="emoji guess game, movie emoji quiz, team building games, fun friday activities, office games, emoji puzzle"
        />
      </Helmet>

      {/* ================= CONTENT SECTION ================= */}
      <section className="emoji-content">

        <h1>Emoji Guess – Movie Puzzle Game for Team Building</h1>

        <p>
          Emoji Guess is an interactive movie emoji puzzle game designed to
          bring excitement and creativity into team-building sessions,
          classroom activities, and Fun Friday events. Players decode famous
          movie titles using only emoji clues, making it a fun and engaging
          group challenge.
        </p>

        <p>
          This browser-based game requires no downloads or registration.
          Simply open the page and start playing instantly. It works smoothly
          on desktop, tablet, and mobile devices.
        </p>

        <h2>How to Play Emoji Guess</h2>

        <p>
          Look at the emoji combination displayed below. Each emoji sequence
          represents a well-known movie. Type your guess into the input box
          and click “Check” to see if you’re correct.
        </p>

        <ul>
          <li>Each emoji puzzle represents one movie title.</li>
          <li>Spelling must match the correct movie name.</li>
          <li>Click “Next” to move to a new emoji challenge.</li>
          <li>Play individually or divide into teams for competition.</li>
        </ul>

        <h2>Why Emoji Guess is Perfect for Office Fun Friday</h2>

        <p>
          Emoji-based games are excellent icebreakers. They encourage quick
          thinking, creative interpretation, and team discussion. During
          office Fun Friday sessions, this activity helps reduce stress and
          promotes collaboration in a light-hearted way.
        </p>

        <p>
          Since emoji clues are open to interpretation, team members often
          debate and brainstorm possible answers together. This interaction
          strengthens communication skills and builds camaraderie.
        </p>

        <h2>Benefits of Emoji Guessing Games in the Workplace</h2>

        <p>
          Incorporating short interactive games into work routines improves
          employee morale and productivity. Emoji guessing challenges:
        </p>

        <ul>
          <li>Encourage collaborative problem-solving</li>
          <li>Stimulate creative thinking</li>
          <li>Improve communication between departments</li>
          <li>Reduce workplace stress</li>
          <li>Create shared positive experiences</li>
        </ul>

        <p>
          Even short 10–15 minute sessions can significantly boost team
          engagement and energy levels.
        </p>

        <h2>Tips for Hosting a Successful Emoji Guess Session</h2>

        <ul>
          <li>Divide participants into balanced teams.</li>
          <li>Set a time limit for each puzzle.</li>
          <li>Award points for correct answers.</li>
          <li>Encourage group discussion before submitting answers.</li>
          <li>Keep the session short and energetic.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>Is Emoji Guess suitable for corporate teams?</h3>
        <p>
          Yes. The game is designed for professional environments and works
          well for employee engagement sessions.
        </p>

        <h3>Can this game be used in classrooms?</h3>
        <p>
          Absolutely. Teachers can use Emoji Guess as a fun educational
          activity to improve creative thinking and teamwork.
        </p>

        <h3>Do I need to create an account?</h3>
        <p>
          No registration is required. The game runs directly in your browser
          and is free to use.
        </p>

        <h3>Is Emoji Guess mobile friendly?</h3>
        <p>
          Yes. The game is responsive and works across mobile, tablet, and
          desktop devices.
        </p>

      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="emoji-game">

        <TeamTurnBanner showNextButton={false} />

        <div className="emoji-box">
          <span className="emoji">
            {emojiMovies[currentIndex].emoji}
          </span>
        </div>

        <input
          type="text"
          className="emoji-input"
          placeholder="Guess the movie..."
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />

        <div className="emoji-buttons">
          <button onClick={checkAnswer}>Check</button>
          <button onClick={nextEmoji}>Next</button>
        </div>

        {message && <p className="emoji-message">{message}</p>}

      </section>

    </div>
  );
};

export default EmojiGuess;
