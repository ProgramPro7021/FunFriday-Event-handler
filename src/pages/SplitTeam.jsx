import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
import { useTeam } from "../context/TeamContext";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/SplitTeam.css";
import Timer from "./Timer";

const SplitTeam = () => {
<<<<<<< HEAD
  const { teams, setTeams } = useTeam();
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState(
    () => JSON.parse(localStorage.getItem("players")) || []
  );
<<<<<<< HEAD
=======
  const [teams, setTeams] = useState(
    () => JSON.parse(localStorage.getItem("teams")) || []
  );
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  const [numTeams, setNumTeams] = useState(
    () => Number(localStorage.getItem("numTeams")) || 2
  );
  const [teamScores, setTeamScores] = useState(
    () => JSON.parse(localStorage.getItem("teamScores")) || []
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
<<<<<<< HEAD
=======
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
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
    if (!trimmedName) return alert("Please enter a player name!");

    const exists = players.some(
      (p) => p.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) return alert("Player already exists!");

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
    if (players.length < numTeams)
      return alert("Not enough players for selected teams");

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
    const scoreInput = prompt("Enter score:");
    const score = Number(scoreInput);

    if (isNaN(score) || score < 0)
      return alert("Enter valid score");

    const updatedTeams = teams.map((team, i) =>
      team.map((player, j) =>
        i === teamIndex && j === playerIndex
          ? { ...player, played: true, score }
          : player
      )
    );

    setTeams(updatedTeams);

    const updatedScores = [...teamScores];
    updatedScores[teamIndex] += score;
    setTeamScores(updatedScores);
  };

  const checkWinner = () => {
    const maxScore = Math.max(...teamScores);
    const winners = teamScores.filter((s) => s === maxScore);

    if (winners.length > 1) setWinner("Draw");
    else setWinner(`Team ${teamScores.indexOf(maxScore) + 1}`);
  };

  const resetAll = () => {
    setPlayers([]);
    setTeams([]);
    setTeamScores([]);
    setWinner(null);
    localStorage.clear();
  };

  /* =========================
     JSX
  ========================= */
  return (
    <div className="split-team">

<<<<<<< HEAD
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Random Team Generator – Split Teams Instantly</title>
        <meta
          name="description"
          content="Instantly split players into random teams using our free team generator. Perfect for office Fun Friday options, classroom games, sports events, and group activities."
        />
        <meta
          name="keywords"
          content="team generator, random team splitter, team builder, office games, classroom activities, group games, sports team split"
        />
      </Helmet>

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      {/* ================= SEO SECTION ================= */}
      <section className="seo-content">
        <h1>Random Team Generator & Split Team Tool</h1>
        <p>
          Easily split players into random teams using our free online Team Generator.
          Perfect for office games, classroom activities, sports matches, and
          Fun Friday sessions.
        </p>

        <h2>How to Use the Team Split Tool</h2>
        <ul>
          <li>Add player names</li>
          <li>Select number of teams</li>
          <li>Click split to generate random teams</li>
          <li>Track scores and declare a winner</li>
<<<<<<< HEAD
          <li><strong>Bonus:</strong> Once split, games will automatically rotate turns — Team 1 → Team 2 → Team 1 → …</li>
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
        </ul>

        <h2>Why Use a Random Team Generator?</h2>
        <p>
          Random team generators ensure fairness, remove bias, and create
          balanced groups instantly. This tool is ideal for events, team
          building sessions, and friendly competitions.
        </p>
      </section>

      {/* ================= GAME CONTROLS ================= */}
      <section className="game-section">

        <div className="controls">
          <input
            type="text"
            placeholder="Enter player name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addPlayer()}
          />

          <button onClick={addPlayer}>Add Player</button>

          <input
            type="number"
            min="2"
            value={numTeams}
            onChange={(e) => setNumTeams(Number(e.target.value))}
          />

          <button onClick={splitTeams}>Split Teams</button>
          <button onClick={resetAll}>Reset All</button>
        </div>

        <Timer
          start={startTimer}
          onComplete={() => {
            if (pendingPlayer) {
              markPlayed(pendingPlayer.teamIndex, pendingPlayer.playerIndex);
              setPendingPlayer(null);
            }
            setStartTimer(false);
          }}
        />
      </section>

      {/* ================= OUTPUT ================= */}
      <section className="output-section">

        <div className="teams-display">
          {teams.map((team, i) => (
            <div className="team-card" key={i}>
              <h3>Team {i + 1}</h3>
              <ul>
                {team.map((p, j) => (
                  <li key={p.id}>
                    {p.name}
                    {!p.played && (
                      <button
                        onClick={() => {
                          setPendingPlayer({ teamIndex: i, playerIndex: j });
                          setStartTimer(true);
                        }}
                      >
                        Start Timer
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <p>Score: {teamScores[i] || 0}</p>
            </div>
          ))}
        </div>

        {teams.length > 0 && (
          <button className="winner-btn" onClick={checkWinner}>
            Check Winner
          </button>
        )}

        {winner && (
          <div className="winner-box">
            {winner === "Draw"
              ? "It's a Draw!"
              : `${winner} Wins! 🎉`}
          </div>
        )}
      </section>

      {/* ================= FAQ ================= */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this team generator free?</h3>
        <p>Yes, this tool is completely free to use.</p>

        <h3>Can I use it for classroom activities?</h3>
        <p>Yes. Teachers use this tool to create balanced student teams.</p>

        <h3>Does it ensure fair random distribution?</h3>
        <p>
          Yes, players are shuffled randomly before being assigned to teams.
        </p>
      </section>
    </div>
  );
};

export default SplitTeam;
