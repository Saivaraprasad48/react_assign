import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Cookies from "js-cookie";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!!Cookies.get("username")) {
      navigate("/home");
    }
  }, []);

  const handleLogin = () => {
    if (username === "foo" && password === "bar") {
      document.cookie = `username=${username}`;
      navigate("/home");
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
