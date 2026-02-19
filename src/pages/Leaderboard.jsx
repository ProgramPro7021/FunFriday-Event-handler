import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../context/AuthContext";
import "../css/Leaderboard.css";

const Leaderboard = () => {
  const { getLeaderboard } = useAuth();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gameFilter, setGameFilter] = useState("all");

  const games = [
    { id: "all", name: "All Games" },
    { id: "memory", name: "Memory Card" },
    { id: "rapidfire", name: "Rapid Fire" },
    { id: "emoji", name: "Emoji Guess" },
    { id: "dumbCharades", name: "Dumb Charades" },
    { id: "sketch", name: "Sketch & Guess" },
    { id: "fastestfinger", name: "Fastest Finger" },
    { id: "songguess", name: "Song Guess" },
    { id: "wordbuilder", name: "Word Builder" },
  ];

  useEffect(() => {
    loadLeaderboard();
  }, [gameFilter]);

  const loadLeaderboard = async () => {
    setLoading(true);
    try {
      const data = await getLeaderboard(
        gameFilter === "all" ? null : gameFilter,
        100
      );
      setLeaderboard(data);
    } catch (error) {
      console.error("Error loading leaderboard:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="leaderboard-page">
      <Helmet>
        <title>FunFriday Leaderboard – Top Players & Scores</title>
        <meta
          name="description"
          content="View the FunFriday global leaderboard. See top players, their scores, and compete to be #1 in different games."
        />
        <meta
          name="keywords"
          content="leaderboard, high scores, top players, game rankings, competition"
        />
      </Helmet>

      <section className="leaderboard-header">
        <h1>🏆 FunFriday Leaderboard</h1>
        <p>Compete with others and climb the rankings!</p>
      </section>

      <section className="leaderboard-container">
        <div className="filter-section">
          <h2>Filter by Game:</h2>
          <div className="game-filters">
            {games.map((game) => (
              <button
                key={game.id}
                className={`filter-btn ${gameFilter === game.id ? "active" : ""}`}
                onClick={() => setGameFilter(game.id)}
              >
                {game.name}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="loading">
            <p>Loading leaderboard...</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="empty-state">
            <p>No scores yet. Start playing to appear on the leaderboard!</p>
          </div>
        ) : (
          <div className="leaderboard-table">
            <div className="table-header">
              <div className="rank">Rank</div>
              <div className="player">Player</div>
              <div className="score">Score</div>
              <div className="game">Game</div>
            </div>

            {leaderboard.map((entry, index) => (
              <div key={index} className="table-row">
                <div className="rank">
                  {entry.rank === 1 && "🥇"}
                  {entry.rank === 2 && "🥈"}
                  {entry.rank === 3 && "🥉"}
                  {entry.rank > 3 && entry.rank}
                </div>
                <div className="player">{entry.userName}</div>
                <div className="score">{entry.score.toLocaleString()}</div>
                <div className="game">{entry.gameType}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="leaderboard-info">
        <h2>How It Works</h2>
        <ul>
          <li>Sign in or create an account</li>
          <li>Play any FunFriday game</li>
          <li>Your score is automatically recorded</li>
          <li>Climb the global or game-specific rankings</li>
          <li>Compete with friends and colleagues</li>
        </ul>
      </section>
    </div>
  );
};

export default Leaderboard;
