import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Kanban from "./components/Kanban";

function App() {
  // redirect to todo after successful login
  const handleLogin = (googleData) => {
    console.log(googleData);
    window.location.href = "/todo";
  };

  return (
    <Router>
      <nav>
        <Link className="nav-links-login" to="/login">
          Login Page
        </Link>
        <Link className="nav-links-todo" to="/kanban">
          Kanban
        </Link>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Kanban" element={<Kanban />} />
      </Routes>
    </Router>
  );
}

export default App;
