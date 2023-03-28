import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/*" element=<LoginPage /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
