import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import { useAuth } from '../context/AuthContext.jsx';
import '../css/Navbar.css';

const Navbar = () => {
  const { user } = useAuth();

=======
import '../css/Navbar.css';

const Navbar = () => {
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
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
<<<<<<< HEAD
          <NavLink to="/" end className="nav-link">
            <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span>Home</span>
=======
    <NavLink to="/" end className="nav-link">
            👥 <span>Home</span>
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
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
<<<<<<< HEAD

          <NavLink to="/leaderboard" className="nav-link">
            🏆 <span>Leaderboard</span>
          </NavLink>

          <NavLink to="/auth" className="nav-link auth-link">
            {user ? '👤 Account' : '🔐 Sign In'}
          </NavLink>
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
        </div>

      </div>
    </nav>
  )
}

export default Navbar