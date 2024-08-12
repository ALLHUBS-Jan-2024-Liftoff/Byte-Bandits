import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout({ setAuthenticated }) {
  const handleLogout = async () => {

    try {
      await axios.get("http://localhost:8080/user/logout",
        {
          withCredentials: true,
        });
      setAuthenticated(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
