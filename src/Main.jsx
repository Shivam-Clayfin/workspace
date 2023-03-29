import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import App from "./App";
import Reports from "./components/Reports/Reports";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default Main;
