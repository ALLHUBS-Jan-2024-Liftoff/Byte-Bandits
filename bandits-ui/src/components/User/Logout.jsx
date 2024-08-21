import React from "react";
import { useNavigate } from "react-router-dom";
//import { logout } from "../services/AuthService";
import { logout } from "../../services/AuthService";

function Logout({ setAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Use the logout function from AuthService
      await logout();

      setAuthenticated(false);
      localStorage.removeItem("token");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
