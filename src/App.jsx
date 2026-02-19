import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { AuthProvider } from "./context/AuthContext.jsx";
import { TeamProvider } from "./context/TeamContext.jsx";
=======
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import Navbar from "./pages/Navbar";
import SplitTeam from "./pages/SplitTeam";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";
import Footer from "./pages/Footer";
import Privacy from "./legal/Privacy";
import About from "./legal/About";
import Contact from "./legal/Contact";
import Terms from "./legal/Terms";
import Disclaimer from "./legal/Disclaimer";
import Ideas from "./games/ideas";
import Home from "./pages/home";
<<<<<<< HEAD
import Leaderboard from "./pages/Leaderboard";
import Auth from "./pages/Auth";
import "./App.css";
import RapidFire from "./newgames/rapidfire";
import EmojiGuess from "./newgames/EmojiGuess";
import DumbCharades from "./newgames/DumbCharades";
=======
import "./App.css";
import RapidFire from "./newgames/rapidfire";
import EmojiGuess from "./newgames/EmojiGuess";
import  DumbCharades from "./newgames/DumbCharades";
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
import Memory from "./newgames/memory";
import Sketch from "./newgames/sketch";
import Fastestfinger from "./newgames/fastestfinger";
import Songguess from "./newgames/songguess";
import Wordbuilder from "./newgames/wordbuilder";
<<<<<<< HEAD

function App() {
  return (
    <AuthProvider>
      <TeamProvider>
=======
function App() {
  return (
    <>
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
      <Navbar />
      <main className="app-layout">
        <Routes>
          <Route path="/SplitTeam" element={<SplitTeam />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
<<<<<<< HEAD
          <Route path="/ideas" element={<Ideas />} />
=======
          <Route path="/ideas" element={<Ideas />} /> 
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
          <Route path="/" element={<Home />} />
          <Route path="/rapidfire" element={<RapidFire />} />
          <Route path="/emoji" element={<EmojiGuess />} />
          <Route path="/dumbCharades" element={<DumbCharades />} />
<<<<<<< HEAD
=======

>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
          <Route path="/memory" element={<Memory />} />
          <Route path="/sketch" element={<Sketch />} />
          <Route path="/fastestfinger" element={<Fastestfinger />} />
          <Route path="/songguess" element={<Songguess />} />
          <Route path="/wordbuilder" element={<Wordbuilder />} />
<<<<<<< HEAD
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
      </TeamProvider>
    </AuthProvider>
=======
        </Routes>
      </main>
      <Footer />
    </>
>>>>>>> e17c8d87192d2bfcb7a22dd5d9d9377cfb68a09e
  );
}

export default App;