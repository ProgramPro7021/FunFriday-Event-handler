import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";

import SplitTeam from "./pages/SplitTeam";
import StopWatch from "./pages/StopWatch";
import Timer from "./pages/Timer";
import "./App.css";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="app-layout">
        <Routes>
          <Route path="/" element={<SplitTeam />} />
          <Route path="/stop-watch" element={<StopWatch />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
