import React, { useState, useRef } from "react";
import "../css/StopWatch.css";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time / 10) % 100);

    return (
      `${minutes.toString().padStart(2, "0")}:` +
      `${seconds.toString().padStart(2, "0")}:` +
      `${milliseconds.toString().padStart(2, "0")}`
    );
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <h2>Stopwatch</h2>

        <div className="stopwatch-time-display">
          {formatTime()}
        </div>

        <div className="stopwatch-buttons">
          <button
            className="stopwatch-btn stopwatch-btn-start"
            onClick={start}
            disabled={running}
          >
            Start
          </button>

          <button
            className="stopwatch-btn stopwatch-btn-pause"
            onClick={pause}
          >
            Pause
          </button>

          <button
            className="stopwatch-btn stopwatch-btn-reset"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
