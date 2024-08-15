import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";


function Logout() {

  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleLogout = async () => {

    try {
      await axios.get("http://localhost:8080/user/logout",
        {
          withCredentials: true,
        });
      setToken("");
      console.log("token in storage", localStorage.getItem("token"));  
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
