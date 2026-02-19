import React, { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserStats(currentUser.uid);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Fetch user statistics
  const fetchUserStats = async (userId) => {
    try {
      const scoresRef = collection(db, "scores");
      const q = query(where("userId", "==", userId));
      const snapshot = await getDocs(q);

      let totalScore = 0;
      let gamesPlayed = 0;
      const gameStats = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        totalScore += data.score || 0;
        gamesPlayed += 1;
        gameStats[data.gameType] = (gameStats[data.gameType] || 0) + 1;
      });

      setUserStats({
        totalScore,
        gamesPlayed,
        gameStats,
        userId,
      });
    } catch (error) {
      console.error("Error fetching user stats:", error);
    }
  };

  // Google Sign In
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      console.error("Google sign-in error:", error);
      throw error;
    }
  };

  // Email/Password Sign Up
  const signUpWithEmail = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error("Sign-up error:", error);
      throw error;
    }
  };

  // Email/Password Sign In
  const signInWithEmail = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (error) {
      console.error("Sign-in error:", error);
      throw error;
    }
  };

  // Sign Out
  const logout = async () => {
    try {
      await signOut(auth);
      setUserStats(null);
    } catch (error) {
      console.error("Sign-out error:", error);
      throw error;
    }
  };

  // Submit Score
  const submitScore = async (gameType, score, playerName) => {
    if (!user) {
      console.error("User not authenticated");
      return false;
    }

    try {
      await addDoc(collection(db, "scores"), {
        userId: user.uid,
        userName: playerName || user.displayName || user.email,
        userEmail: user.email,
        gameType,
        score,
        timestamp: Timestamp.now(),
      });

      // Update local stats
      fetchUserStats(user.uid);
      return true;
    } catch (error) {
      console.error("Error submitting score:", error);
      return false;
    }
  };

  // Get Leaderboard
  const getLeaderboard = async (gameType = null, limit_count = 100) => {
    try {
      let q;
      if (gameType) {
        q = query(
          collection(db, "scores"),
          where("gameType", "==", gameType),
          orderBy("score", "desc"),
          limit(limit_count)
        );
      } else {
        q = query(
          collection(db, "scores"),
          orderBy("score", "desc"),
          limit(limit_count)
        );
      }

      const snapshot = await getDocs(q);
      const leaderboard = [];
      const uniquePlayers = {};

      snapshot.forEach((doc) => {
        const data = doc.data();
        const playerKey = data.userId;

        if (!uniquePlayers[playerKey]) {
          uniquePlayers[playerKey] = {
            userName: data.userName,
            score: data.score,
            gameType: data.gameType,
            timestamp: data.timestamp,
          };
        } else if (data.score > uniquePlayers[playerKey].score) {
          uniquePlayers[playerKey].score = data.score;
        }
      });

      Object.values(uniquePlayers)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit_count)
        .forEach((entry, index) => {
          leaderboard.push({ rank: index + 1, ...entry });
        });

      return leaderboard;
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
      return [];
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userStats,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        logout,
        submitScore,
        getLeaderboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
