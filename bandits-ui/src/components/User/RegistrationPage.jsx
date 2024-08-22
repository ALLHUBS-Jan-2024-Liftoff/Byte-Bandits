import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import { register } from "../services/AuthService";

function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [condition, setCondition] = useState("");
  const [signUpButton, setSignUpButton] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!validateEmail(emailValue)) {
      setEmailError("Invalid email address");
      setSignUpButton(false);
    } else {
      setEmailError("");
      setSignUpButton(true);
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue !== confirmPassword) {
      setPasswordError("Passwords do not match");
      setSignUpButton(false);
    } else {
      setPasswordError("");
      setSignUpButton(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const confirmPasswordValue = e.target.value;
    setConfirmPassword(confirmPasswordValue);
    if (confirmPasswordValue !== password) {
      setPasswordError("Passwords do not match");
      setSignUpButton(false);
    } else {
      setPasswordError("");
      setSignUpButton(true);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (passwordError || emailError) {
      setMessage("Please fix the errors before submitting.");
      setCondition("danger");
      return;
    }

    try {
      const response = await register(username, password, firstName, lastName, email);
      setMessage("Registration successful! Redirecting to login page...");
      setCondition("success");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Registration failed. Please try again.";
      setMessage(errorMsg);
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
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            required
          />
          {passwordError && <Alert variant="danger" className="mt-2">{passwordError}</Alert>}
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
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          {emailError && <Alert variant="danger" className="mt-2">{emailError}</Alert>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={!signUpButton}>Register</button>
      </form>
      {message && (
        <Alert variant={condition} className="mt-3">
          {message}
        </Alert>
      )}
    </div>
  );
}

export default RegistrationPage;