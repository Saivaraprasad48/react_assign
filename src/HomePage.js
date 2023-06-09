import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "./ContactList";
import Cookies from "js-cookie";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  useEffect(() => {
    let val = !!Cookies.get("username");
    if (!val) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="home-container">
      <div className="home-header">
        <h2>Welcome foo!</h2>
        <button className="home-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <ContactList />
    </div>
  );
};

export default HomePage;
