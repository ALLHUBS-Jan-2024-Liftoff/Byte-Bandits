import React from "react";
import { useNavigate } from "react-router-dom";
//import { logout } from "../services/AuthService";
import { logout } from "../../services/AuthService";
import { handleLogout } from "../../services/userService";

function Logout({ setAuthenticated }) {
  const navigate = useNavigate();

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
