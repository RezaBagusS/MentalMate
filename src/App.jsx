import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MoodTracker from "./pages/MoodTracker";
import DailyPlanner from "./pages/DailyPlanner";
import SOS from "./pages/SOS";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mood-tracker" element={<MoodTracker />} />
        <Route path="/daily-planner" element={<DailyPlanner />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/*" element={<div>NOT FOUND 404</div>} />
      </Routes>
    </Router>
  )
}

export default App
