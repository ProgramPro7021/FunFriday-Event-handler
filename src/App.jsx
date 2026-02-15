import { Routes, Route } from "react-router-dom";
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
import "./App.css";
import RapidFire from "./newgames/rapidfire";

function App() {
  return (
    <>
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
          <Route path="/ideas" element={<Ideas />} /> 
          <Route path="/" element={<Home />} />
          <Route path="/rapidfire" element={<RapidFire />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;