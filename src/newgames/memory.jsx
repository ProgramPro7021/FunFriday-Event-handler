import React, { useState, useEffect } from "react";
import "../css/Memory.css";

const cardImages = [
  { src: "🍎" },
  { src: "🍌" },
  { src: "🍇" },
  { src: "🍉" },
  { src: "🍓" },
  { src: "🍍" },
];

const Memory = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [won, setWon] = useState(false);

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({
        ...card,
        id: Math.random(),
        matched: false,
      }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setTime(0);
    setStarted(true);
    setWon(false);
  };

  // Handle Card Click
  const handleChoice = (card) => {
    if (disabled) return;
    if (card === choiceOne) return;

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare Cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);

      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.src === choiceOne.src
              ? { ...card, matched: true }
              : card
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // Reset Turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  };

  // Timer
  useEffect(() => {
    if (!started || won) return;

    const timer = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [started, won]);

  // Win Detection
  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setWon(true);
      setStarted(false);
    }
  }, [cards]);

  return (
    <div className="memory-page">
      
      {/* ================= SEO CONTENT SECTION ================= */}
      <section className="memory-content">
        <h1>🧠 Memory Card Matching Game – Train Your Brain</h1>
        <p>
          Play this free online memory card game and improve your
          concentration, visual recognition, and short-term memory skills.
          Flip the cards, match identical emojis, and complete the board
          in the fewest moves possible.
        </p>

        <h2>How to Play</h2>
        <ul>
          <li>Click on any card to flip it.</li>
          <li>Flip two cards at a time.</li>
          <li>If they match, they stay revealed.</li>
          <li>If not, they flip back.</li>
          <li>Match all cards to win the game.</li>
        </ul>

        <h2>Why Play Memory Games?</h2>
        <p>
          Memory matching games help improve cognitive function,
          attention span, and pattern recognition. They are great for
          kids and adults who want a quick brain workout during breaks.
        </p>
      </section>

      {/* ================= GAME SECTION ================= */}
      <section className="memory-container">
        <div className="stats">
          <p>Moves: {turns}</p>
          <p>Time: {time}s</p>
        </div>

        <button onClick={shuffleCards}>
          {started ? "Restart Game" : "Start Game"}
        </button>

        {!started && !won && (
          <p className="start-message">
            Click "Start Game" to begin playing.
          </p>
        )}

        {won && (
          <div className="win-box">
            <h2>🎉 You Won!</h2>
            <p>
              Completed in <strong>{turns}</strong> moves and{" "}
              <strong>{time}</strong> seconds.
            </p>
            <button onClick={shuffleCards}>Play Again</button>
          </div>
        )}

        <div className="card-grid">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <div
                className={
                  card === choiceOne ||
                  card === choiceTwo ||
                  card.matched
                    ? "flipped"
                    : ""
                }
              >
                <div
                  className="front"
                  onClick={() => handleChoice(card)}
                >
                  {card.src}
                </div>
                <div className="back">❓</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="memory-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this memory game free?</h3>
        <p>Yes, you can play this memory card matching game for free online.</p>

        <h3>Does it work on mobile?</h3>
        <p>
          Yes, the game is fully responsive and works smoothly on phones,
          tablets, and desktops.
        </p>

        <h3>Can kids play this game?</h3>
        <p>
          Absolutely. This simple memory matching game is suitable for
          children and adults alike.
        </p>
      </section>
    </div>
  );
};

export default Memory;
