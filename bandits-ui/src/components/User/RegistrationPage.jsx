import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";  // Ensure the import path is correct

function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [condition, setCondition] = useState("");

  const navigate = useNavigate();

  // Function to validate the password
  const isValidPassword = (password) => {
    return (
      password.length > 6 &&
      /[A-Z]/.test(password) && // checks for an uppercase letter
      /[!@#$%^&*(),.?":{}|<>]/.test(password) // checks for a symbol
    );
  };

  // Function to validate the email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !firstName || !lastName || !email) {
      setMessage("All fields are required.");
      setCondition("danger");
      return;
    }
    // Validate the password
    if (!isValidPassword(password)) {
      setMessage("Password must be more than 6 characters, include one uppercase letter, and one symbol.");
      setCondition("danger");
      return; 
    }
  
    // Validate the email
    if (!isValidEmail(email)) {
      setMessage("Please enter a valid email address.");
      setCondition("danger");
      return; 
    }
  
    try {
      const responseMessage = await register(username, password, firstName, lastName, email);
      setMessage(responseMessage.message);
      setCondition("success");
      navigate("/login");
    } catch (error) {
      // Capture and display backend error messages
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("An error occurred during registration. Please try again.");
      }
      setCondition("danger");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
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
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      {message && (
        <Alert variant={condition}>
          {message}
        </Alert>
      )}
    </div>
  );
}

export default RegistrationPage;
