import React, { createContext, useContext, useState, useEffect, useMemo } from "react";

const TeamContext = createContext(null);

/**
 * Build round-robin play order: Team1-P1, Team2-P1, Team1-P2, Team2-P2, ...
 */
function buildPlayOrder(teams) {
  if (!teams || teams.length === 0) return [];
  const maxPlayers = Math.max(...teams.map((t) => t.length));
  const order = [];
  for (let p = 0; p < maxPlayers; p++) {
    for (let t = 0; t < teams.length; t++) {
      if (teams[t][p]) {
        order.push({
          teamIndex: t,
          playerIndex: p,
          playerName: teams[t][p].name,
          teamName: `Team ${t + 1}`,
        });
      }
    }
  }
  return order;
}

export function TeamProvider({ children }) {
  const [teams, setTeamsState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("teams")) || [];
    } catch {
      return [];
    }
  });
  const [currentTurnIndex, setCurrentTurnIndex] = useState(() => {
    try {
      return Number(localStorage.getItem("currentTurnIndex")) || 0;
    } catch {
      return 0;
    }
  });

  const playOrder = useMemo(() => buildPlayOrder(teams), [teams]);
  const hasTeams = teams.length > 0;
  const currentPlayer = hasTeams && playOrder.length > 0
    ? playOrder[currentTurnIndex % playOrder.length]
    : null;

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams]);

  useEffect(() => {
    localStorage.setItem("currentTurnIndex", String(currentTurnIndex));
  }, [currentTurnIndex]);

  const nextTurn = () => {
    setCurrentTurnIndex((i) => (i + 1) % Math.max(1, playOrder.length));
  };

  const setTeams = (newTeams) => {
    setTeamsState(newTeams);
    setCurrentTurnIndex(0);
  };

  const value = {
    teams,
    setTeams,
    playOrder,
    currentTurnIndex,
    currentPlayer,
    nextTurn,
    hasTeams,
  };

  return (
    <TeamContext.Provider value={value}>
      {children}
    </TeamContext.Provider>
  );
}

export function useTeam() {
  const ctx = useContext(TeamContext);
  if (!ctx) {
    throw new Error("useTeam must be used within TeamProvider");
  }
  return ctx;
}
