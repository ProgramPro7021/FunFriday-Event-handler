import React, { useState, useRef, useEffect } from "react";
<<<<<<< HEAD
import { Helmet } from "react-helmet";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import "../css/StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  /* =========================
     START
  ========================= */
  const start = () => {
    if (running) return;

    setRunning(true);
    startTimeRef.current = Date.now() - time;

    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10);
  };

  /* =========================
     PAUSE
  ========================= */
  const pause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  /* =========================
     RESET
  ========================= */
  const reset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  /* =========================
     LAP
  ========================= */
  const addLap = () => {
    if (!running) return;
    setLaps([...laps, formatTime(time)]);
  };

  const clearLaps = () => {
    setLaps([]);
  };

  /* =========================
     CLEANUP
  ========================= */
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  /* =========================
     FORMAT TIME
  ========================= */
  const formatTime = (currentTime) => {
    const minutes = Math.floor((currentTime / 60000) % 60);
    const seconds = Math.floor((currentTime / 1000) % 60);
    const milliseconds = Math.floor((currentTime / 10) % 100);

    return (
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}:` +
      `${milliseconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <div className="stopwatch-page">

<<<<<<< HEAD
      {/* ================= SEO META ================= */}
      <Helmet>
        <title>Free Online Stopwatch with Lap Timer – Accurate Timing Tool</title>
        <meta
          name="description"
          content="Use our free online stopwatch with lap timer feature. Perfect for workouts, games, classroom activities, office competitions, and accurate time tracking."
        />
        <meta
          name="keywords"
          content="stopwatch, lap timer, online timer, free stopwatch, timing tool, workout timer, sports timer"
        />
      </Helmet>

=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      {/* ================= SEO CONTENT ================= */}
      <section className="stopwatch-seo">
        <h1>Free Online Stopwatch with Lap Timer</h1>
        <p>
          Use our free online stopwatch to measure time accurately.
          Perfect for workouts, games, classroom activities, office
          competitions, and productivity tracking.
        </p>

        <h2>Features</h2>
        <ul>
          <li>Accurate millisecond timing</li>
          <li>Pause and resume</li>
          <li>Lap tracking</li>
          <li>Reset and clear laps</li>
        </ul>
      </section>

      {/* ================= STOPWATCH ================= */}
      <section className="stopwatch-container">
        <div className="stopwatch-card">
          <div className="stopwatch-time-display">
            {formatTime(time)}
          </div>

          <div className="stopwatch-buttons">
            <button
              className="stopwatch-btn start"
              onClick={start}
              disabled={running}
            >
              Start
            </button>

            <button
              className="stopwatch-btn pause"
              onClick={pause}
              disabled={!running}
            >
              Pause
            </button>

            <button
              className="stopwatch-btn lap"
              onClick={addLap}
              disabled={!running}
            >
              Lap
            </button>

            <button
              className="stopwatch-btn reset"
              onClick={reset}
            >
              Reset
            </button>
          </div>

          {/* ================= LAPS ================= */}
          {laps.length > 0 && (
            <div className="laps-section">
              <h3>Lap Times</h3>
              <ul>
                {laps.map((lap, index) => (
                  <li key={index}>
                    Lap {index + 1}: {lap}
                  </li>
                ))}
              </ul>
              <button className="clear-laps" onClick={clearLaps}>
                Clear Laps
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="stopwatch-faq">
        <h2>Frequently Asked Questions</h2>

        <h3>Is this stopwatch accurate?</h3>
        <p>
          Yes. It calculates time using system timestamps to minimize
          interval drift.
        </p>

        <h3>Can I use this for workouts?</h3>
        <p>
          Absolutely. It is suitable for HIIT, sports timing, and
          competitions.
        </p>
      </section>

    </div>
  );
};

export default StopWatch;
