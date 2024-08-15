import React, { useState } from "react";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";


const LoginPage =() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [condition, setCondition] = useState("");

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Logging in...")
      const response = await axios.post(
        "http://localhost:8080/user/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      setToken(response.data.token);
      setCondition("success");
      console.log("token in storage", localStorage.getItem("token"));
      setMessage(response.data.message);
      navigate("/", {replace: true});
      console.log("response", response, "response.data", response.data);

    } catch (error) {
      setCondition("danger");
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {message &&
        <Alert variant={condition}>
          {message}
        </Alert>}
    </div>
  );
}

export default LoginPage;
