import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Login";
import Todo from "./components/Todo";
import ErrorPage from "./components/ErrorPage";

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
          Home
        </Link>
        <Link className="nav-links-todo" to="/todo">
          Todo
        </Link>
      </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Todo" element={<Todo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
