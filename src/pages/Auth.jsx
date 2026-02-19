import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import "../css/Auth.css";

const Auth = () => {
  const { signInWithGoogle, signUpWithEmail, signInWithEmail, user, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithGoogle();
      setSuccess("Successfully signed in!");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        await signInWithEmail(email, password);
        setSuccess("Successfully signed in!");
      } else {
        if (password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
        await signUpWithEmail(email, password);
        setSuccess("Account created successfully!");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (user) {
    return (
      <div className="auth-container">
        <div className="auth-card user-info">
          <h2>Welcome, {user.displayName || user.email}!</h2>
          <button className="logout-btn" onClick={logout} disabled={loading}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>{isLogin ? "Sign In" : "Create Account"}</h1>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <form onSubmit={handleEmailAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Loading..." : isLogin ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          className="google-btn"
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          🔵 Sign in with Google
        </button>

        <p className="toggle-auth">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
              setSuccess("");
              setEmail("");
              setPassword("");
              setConfirmPassword("");
            }}
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
