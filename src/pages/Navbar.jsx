import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx';
import '../css/Navbar.css';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <div className="navbar-brand">
          <span className="logo-icon">🎉</span>
          <div className="brand-text">
            <h1 className="brand-title">FunFriday</h1>
            <p className="brand-subtitle">Managing Made Easy</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            🏠 <span>Home</span>
          </NavLink>

          <NavLink to="/SplitTeam" end className="nav-link">
            👥 <span>Split Team</span>
          </NavLink>

          <NavLink to="/ideas" className="nav-link">
            ⏰ <span>Games</span>
          </NavLink>

          <NavLink to="/stop-watch" className="nav-link">
            ⏱️ <span>Stop Watch</span>
          </NavLink>

          <NavLink to="/leaderboard" className="nav-link">
            🏆 <span>Leaderboard</span>
          </NavLink>

          <NavLink to="/auth" className="nav-link auth-link">
            {user ? '👤 Account' : '🔐 Sign In'}
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar