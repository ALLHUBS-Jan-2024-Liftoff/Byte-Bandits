import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { login } from "../services/AuthService";


function LoginPage({ setAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [condition, setCondition] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await login(username, password);

        console.log("Token stored:", localStorage.getItem('token'));
        setAuthenticated(true);
        setError(null)
        setCondition("success");
        setMessage("Login successful!");
        navigate("/home");
    } catch (error) {
        setError("Login Faild, Please check your username and password.")
        setCondition("danger");
        setMessage(error.response?.data?.message || "Login failed");
    }
};

useEffect(() => {
    const token = localStorage.getItem('token');
    console.log("Checking token:", token);
    setIsLoggedIn(!!token);
}, []);

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
        {error && <Alert variant="danger">{error}</Alert>}
    </div>
  );
}

export default LoginPage;