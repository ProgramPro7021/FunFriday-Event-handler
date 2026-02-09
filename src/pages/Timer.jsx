import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

const Timer = ({ start, onComplete }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  const [minutes, setMinutes] = useState(() => {
    return Number(localStorage.getItem("minutes")) || 1;
  });
  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time")) || 0;
  });
  const [isActive, setIsActive] = useState(() => {
    return localStorage.getItem("isActive") === "true";
  });
  const [completedText, setCompletedText] = useState(
    localStorage.getItem("completedText") || ""
  );

useEffect(() => {
    if (time === 0 && isActive) {
      setIsActive(false);
      setCompletedText(`${minutes} minute${minutes > 1 ? "s" : ""} completed`);
      if (onComplete) {
        onComplete(); // tell parent timer is done
      }
    }
  }, [time, isActive, minutes, onComplete]);



  const totalTime = minutes * 60;
  const intervalRef = useRef(null);

  /* ===== TIMER LOGIC ===== */
  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && isActive) {
      setIsActive(false);
      setCompletedText(
        `${minutes} minute${minutes > 1 ? "s" : ""} completed`
      );
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, time, minutes]);

  /* ===== RESPOND TO PROP ===== */
  useEffect(() => {
    if (start) {
      // external trigger from SplitTeam
      setTime(minutes * 60);
      setCompletedText("");
      setIsActive(true);
    } else {
      // if parent resets
      setIsActive(false);
      setTime(0);
      setCompletedText("");
    }
  }, [start, minutes]);

  /* ===== PERSIST STATE ===== */
  useEffect(() => {
    localStorage.setItem("time", time);
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("isActive", isActive);
    localStorage.setItem("completedText", completedText);
  }, [time, minutes, isActive, completedText]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const offset =
    time > 0
      ? circumference - (time / totalTime) * circumference
      : circumference;

  return (
    <div className="timer-container">
      <div className="ring-wrapper" style={{ width: 220, height: 220 }}>
        <svg width="220" height="220" className="progress-ring">
          <circle r="90" cx="110" cy="110" className="ring-bg" />
          <circle
            r="90"
            cx="110"
            cy="110"
            className={`ring-progress
              ${isActive ? "running" : ""}
              ${time <= 10 && time > 0 ? "danger" : ""}
              ${completedText ? "completed" : ""}
            `}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>

        <div className="timer-box">
          {completedText ? (
            <div className="completed-inside">{completedText}</div>
          ) : (
            formatTime(time)
          )}
        </div>
      </div>

      <div className="controls">
        <input
          type="number"
          min="1"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="input-minutes"
          disabled={isActive}
        />
        <span>minutes</span>
      </div>

      {/* Keep local buttons too if you want manual control */}
   <div className="buttons">
  <button
    className="primary"
    onClick={() => {
      setTime(minutes * 60);
      setCompletedText("");
      setIsActive(true);
    }}
    disabled={isActive}
  >
    Start
  </button>

  <button
    className="danger"
    onClick={() => {
      setIsActive(false);
      setTime(0);
      setCompletedText("");
    }}
  >
    Reset
  </button>
</div>
<button
  className="secondary"
  onClick={() => setIsActive(false)}
  disabled={!isActive}
>
  Pause
</button>
    </div>
  );
};

export default Timer;