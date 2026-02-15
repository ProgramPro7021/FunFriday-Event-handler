import React, { useState, useEffect, useRef } from "react";
import "../css/Timer.css";

const Timer = ({ start, onComplete }) => {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const intervalRef = useRef(null);

  /* =========================
     INITIAL STATE FROM STORAGE
  ========================= */
  const [minutes, setMinutes] = useState(
    () => Number(localStorage.getItem("minutes")) || 1
  );

  const [endTime, setEndTime] = useState(
    () => Number(localStorage.getItem("endTime")) || null
  );

  const [timeLeft, setTimeLeft] = useState(() => {
    const savedEnd = Number(localStorage.getItem("endTime"));
    if (savedEnd) {
      const diff = Math.floor((savedEnd - Date.now()) / 1000);
      return diff > 0 ? diff : 0;
    }
    return 0;
  });

  const [isActive, setIsActive] = useState(
    () => localStorage.getItem("isActive") === "true"
  );

  const [completedText, setCompletedText] = useState(
    () => localStorage.getItem("completedText") || ""
  );

  /* =========================
     START TIMER FROM PARENT
  ========================= */
  useEffect(() => {
    if (start) {
      const newEndTime = Date.now() + minutes * 60 * 1000;
      setEndTime(newEndTime);
      setTimeLeft(minutes * 60);
      setCompletedText("");
      setIsActive(true);
    }
  }, [start]);

  /* =========================
     TIMER LOGIC
  ========================= */
  useEffect(() => {
    if (!isActive || !endTime) return;

    intervalRef.current = setInterval(() => {
      const diff = Math.floor((endTime - Date.now()) / 1000);

      if (diff <= 0) {
        clearInterval(intervalRef.current);
        setTimeLeft(0);
        setIsActive(false);
        setCompletedText(
          `${minutes} minute${minutes > 1 ? "s" : ""} completed`
        );

        if (onComplete) onComplete();
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [isActive, endTime, minutes, onComplete]);

  /* =========================
     PERSIST STATE
  ========================= */
  useEffect(() => {
    localStorage.setItem("minutes", minutes);
    localStorage.setItem("endTime", endTime || "");
    localStorage.setItem("isActive", isActive);
    localStorage.setItem("completedText", completedText);
  }, [minutes, endTime, isActive, completedText]);

  /* =========================
     FORMAT TIME
  ========================= */
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const totalTime = minutes * 60;
  const offset =
    timeLeft > 0
      ? circumference - (timeLeft / totalTime) * circumference
      : circumference;

  /* =========================
     JSX
  ========================= */
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
              ${timeLeft <= 10 && timeLeft > 0 ? "danger" : ""} 
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
            formatTime(timeLeft)
          )}
        </div>
      </div>

      <div className="controls">
        <input
          type="number"
          min="1"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          disabled={isActive}
          className="input-minutes"
        />
        <span>minutes</span>
      </div>

      <div className="buttons">
        <button
          className="primary"
          onClick={() => {
            const newEndTime = Date.now() + minutes * 60 * 1000;
            setEndTime(newEndTime);
            setTimeLeft(minutes * 60);
            setCompletedText("");
            setIsActive(true);
          }}
          disabled={isActive}
        >
          Start
        </button>

        <button
          className="secondary"
          onClick={() => setIsActive(false)}
          disabled={!isActive}
        >
          Pause
        </button>

        <button
          className="danger"
          onClick={() => {
            clearInterval(intervalRef.current);
            setIsActive(false);
            setTimeLeft(0);
            setEndTime(null);
            setCompletedText("");
            localStorage.removeItem("endTime");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
