import React from "react";
import { Link } from "react-router-dom";
import '../css/ideas.css';

const Ideas = () => {
  return (
    <div className="ideas">

      {/* HEADER */}
      <section className="ideas-hero">
        <h1>Fun Friday Game Ideas 🎉</h1>
        <p>
          Explore exciting team games perfect for office events,
          classrooms, and group activities.
        </p>
      </section>

      {/* GAME LIST */}
      <section className="ideas-grid">

        <div className="idea-card">
          <h3>🎯 Rapid Fire Quiz</h3>
          <p>Answer maximum questions in 60 seconds.</p>
          <Link to="/rapidfire"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>🎬 Dumb Charades</h3>
          <p>Act and guess movies without speaking.</p>
          <Link to="/dumbCharades"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>😀 Emoji Guess</h3>
          <p>Guess movies, phrases or brands using emojis.</p>
          <Link to="/emoji"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>🧠 Memory Challenge</h3>
          <p>Remember and recall items shown for 30 seconds.</p>
          <Link to="/memory"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>⚡ Fastest Finger</h3>
          <p>Be the quickest to answer simple logic questions.</p>
          <Link to="/fastestfinger"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>🎨 Sketch & Guess</h3>
          <p>Draw a word and let your team guess it.</p>
          <Link to="/sketch"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>🔤 Word Builder</h3>
          <p>Create maximum words from given letters.</p>
          <Link to="/wordbuilder"><button>Play Now</button></Link>
        </div>

        <div className="idea-card">
          <h3>🎵 Guess the Song</h3>
          <p>Identify songs from short music clips.</p>
          <Link to="/songguess"><button>Play Now</button></Link>
        </div>

      </section>
    </div>
  );
};

export default Ideas;