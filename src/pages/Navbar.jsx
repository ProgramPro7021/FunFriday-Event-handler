import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
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
            👥 <span>Split Team</span>
          </NavLink>

          <NavLink to="/timer" className="nav-link">
            ⏰ <span>Timer</span>
          </NavLink>

          <NavLink to="/stop-watch" className="nav-link">
            ⏱️ <span>Stop Watch</span>
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar