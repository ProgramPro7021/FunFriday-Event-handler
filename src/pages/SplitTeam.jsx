import React, { useState, useEffect } from "react";

import "../css/SplitTeam.css";  
import Timer from "./Timer";

const SplitTeam = () => {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState(
    () => JSON.parse(localStorage.getItem("players")) || [],
  );
  const [teams, setTeams] = useState(
    () => JSON.parse(localStorage.getItem("teams")) || [],
  );
  const [numTeams, setNumTeams] = useState(
    () => Number(localStorage.getItem("numTeams")) || 2,
  );
  const [teamScores, setTeamScores] = useState(
    () => JSON.parse(localStorage.getItem("teamScores")) || [],
  );
  const [winner, setWinner] = useState(null);
  const [startTimer, setStartTimer] = useState(false);
  const [pendingPlayer, setPendingPlayer] = useState(null);

  /* =========================
     LOCAL STORAGE
  ========================= */
  useEffect(() => {
    localStorage.setItem("players", JSON.stringify(players));
  }, [players]);

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem("numTeams", numTeams);
  }, [numTeams]);

  useEffect(() => {
    localStorage.setItem("teamScores", JSON.stringify(teamScores));
  }, [teamScores]);

  /* =========================
     ADD PLAYER
  ========================= */
  const addPlayer = () => {
    const trimmedName = playerName.trim();

    if (!trimmedName) {
      alert("Please enter a player name!");
      return;
    }

    const exists = players.some(
      (p) => p.name.toLowerCase() === trimmedName.toLowerCase(),
    );

    if (exists) {
      alert("This player is already added!");
      return;
    }

    setPlayers([
      ...players,
      { id: Date.now(), name: trimmedName, played: false, score: 0 },
    ]);

    setPlayerName("");
  };

  /* =========================
     SHUFFLE
  ========================= */
  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  /* =========================
     SPLIT TEAMS
  ========================= */
  const splitTeams = () => {
    if (players.length < numTeams) {
      alert("Not enough players for selected number of teams");
      return;
    }

    if (numTeams < 2) return;

    const shuffled = shuffleArray(players);
    const newTeams = Array.from({ length: numTeams }, () => []);

    shuffled.forEach((player, index) => {
      newTeams[index % numTeams].push({ ...player });
    });

    setTeams(newTeams);
    setTeamScores(Array(numTeams).fill(0));
    setWinner(null);
  };

  /* =========================
     MARK PLAYED
  ========================= */
  const markPlayed = (teamIndex, playerIndex) => {
    const scoreInput = prompt("Enter score for this player:");
    const score = Number(scoreInput);

    if (isNaN(score) || score < 0) {
      alert("Please enter a valid score");
      return;
    }

    const updatedTeams = teams.map((team, i) =>
      team.map((player, j) =>
        i === teamIndex && j === playerIndex
          ? { ...player, played: true, score }
          : player,
      ),
    );

    setTeams(updatedTeams);

    const updatedScores = [...teamScores];
    updatedScores[teamIndex] = (updatedScores[teamIndex] || 0) + score;

    setTeamScores(updatedScores);
  };

  /* =========================
     RESET TEAMS
  ========================= */
  const resetTeams = () => {
    setTeams([]);
    setTeamScores([]);
    setPlayers([]);
    setWinner(null);

    localStorage.removeItem("teams");
    localStorage.removeItem("teamScores");
    localStorage.removeItem("players");
  };

  /* =========================
     CHECK WINNER
  ========================= */
  const checkWinner = () => {
    if (teamScores.length < 2) return;

    if (teamScores[0] > teamScores[1]) setWinner("Team 1");
    else if (teamScores[1] > teamScores[0]) setWinner("Team 2");
    else setWinner("Draw");
  };

  /* =========================
     JSX
  ========================= */
  return (
    <div className="split-team">
      <h1>Split Your Team</h1>

      <div className="main">
        {/* Instructions */}
        <div className="instructions-box">
          <h2>How to Use</h2>
          <ol className="instructions-list">
            <li>
              <strong>Add Players:</strong> Enter name and click Add.
            </li>
            <li>
              <strong>Set Teams:</strong> Choose number of teams.
            </li>
            <li>
              <strong>Split:</strong> Click Split to divide players.
            </li>
             <li>
              <strong>Select time:</strong> Like 1 min 2 min etc
            </li>
            <li>
               
              <strong>Start Timer:</strong> Start the player activiety and timer
            </li>


            <li>
              <strong>Winner:</strong> Click Check Winner.
            </li>
            <li>
              <strong>Reset:</strong> Reset Teams or Reset All.
            </li>
          
          </ol>
        </div>

        {/* Controls */}
        <div className="controls">
          <div className="input-row">
            <input
              type="text"
              placeholder="Enter player name"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addPlayer()}
            />

            <button onClick={addPlayer} className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Add</span>
            </button>
          </div>

          <div className="settings-row">
            <p>Number of teams</p>
            <input
              type="number"
              min="2"
              max="10"
              value={numTeams}
              onChange={(e) => setNumTeams(Number(e.target.value))}
            />

            <button onClick={splitTeams} className="button-82-pushable">
              <span className="button-82-front text">🎲 Split</span>
            </button>

            <button onClick={resetTeams} className="button-82-pushable">
              <span className="button-82-front text">🗑️ Reset Teams</span>
            </button>

            <button
              onClick={() => {
                setPlayers([]);
                setTeams([]);
                setTeamScores([]);
                setWinner(null);
                localStorage.clear();
              }}
              className="button-82-pushable"
            >
              <span className="button-82-front text">🔄 Reset All</span>
            </button>
          </div>
        </div>
<div className="Timing"> 
    <Timer
  start={startTimer}
  onComplete={() => {
    if (pendingPlayer) {
      markPlayed(pendingPlayer.teamIndex, pendingPlayer.playerIndex);
      setPendingPlayer(null);
    }
    setStartTimer(false); // reset timer
  }}

/>
</div>

      </div>

      {/* OUTPUT */}
      <div className="content-grid">
        <div className="players-box">
          <h2>Players</h2>
          <ul className="players-list">
            {players.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div className="teams-box">
          <h2>Teams</h2>
          <div className="teams-grid two-columns">
            {teams.map((team, i) => (
              <div className="team-card" key={i}>
                <h3>Team {i + 1}</h3>
                <ul>
                  {team.map((p, j) => (
                    <li key={p.id} className={p.played ? "played" : ""}>
                      {p.name} {p.played && `(Score: ${p.score})`}
                      {!p.played && (
                        <button
                          className="played-btn"
                          onClick={() => {
                            setPendingPlayer({ teamIndex: i, playerIndex: j });
                            setStartTimer(true); // just start timer
                          }}
                        >
                          Start timer
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="scores-box">
          <h2>Scores</h2>

          <ul>
            {teamScores.map((score, i) => (
              <li key={i}>
                Team {i + 1}: {score}
              </li>
            ))}
          </ul>

          <button onClick={checkWinner} className="button-82-pushable">
            <span className="button-82-front text">🏆 Check Winner</span>
          </button>

          {winner && (
            <div className="winner-box">
              {winner === "Draw" ? "It's a Draw!" : `${winner} Wins!`}
              <div className="balloons">
                <div className="balloon red"></div>
                <div className="balloon blue"></div>
                <div className="balloon green"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitTeam;
