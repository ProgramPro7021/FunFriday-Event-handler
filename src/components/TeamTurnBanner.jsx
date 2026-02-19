import React from "react";
import { useTeam } from "../context/TeamContext";
import { Link } from "react-router-dom";

/**
 * Shows current player's turn when teams are split.
 * Renders nothing if no teams. Use in game pages for automatic turn rotation.
 */
export default function TeamTurnBanner({ onNextTurn, showNextButton = true }) {
  const { hasTeams, currentPlayer, nextTurn } = useTeam();

  if (!hasTeams) return null;

  return (
    <div className="team-turn-banner">
      {currentPlayer ? (
        <>
          <span className="team-turn-label">
            <strong>{currentPlayer.playerName}</strong>
            <span className="team-turn-team"> ({currentPlayer.teamName})</span>
          </span>
          {showNextButton && (
            <button
              type="button"
              className="team-turn-btn"
              onClick={() => {
                nextTurn();
                onNextTurn?.();
              }}
            >
              Next Turn
            </button>
          )}
        </>
      ) : (
        <Link to="/SplitTeam" className="team-turn-link">
          Split teams first to use turn rotation
        </Link>
      )}
    </div>
  );
}
