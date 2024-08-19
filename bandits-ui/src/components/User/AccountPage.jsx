import React, { useEffect, useState } from "react";
import axios from "axios";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
  });

  const [password, setPassword] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    // Replace with your actual API call
    const fetchUserData = async () => {
      const response = await fetch('/api/user'); 
      setUserData(data);
    };
    fetchUserData();
  }, []);

  // Handle input changes for user data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input changes for password fields
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  // Handle form submission for user data update
  const handleUserDataSubmit = (e) => {
    e.preventDefault();
    // Make API call to update user data
    console.log('User data updated:', userData);
  };

  // Handle form submission for password change
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    
    console.log('Password updated:', password);
  };

  return (
    <div>
      <h1>Account Management</h1>

      <form onSubmit={handleUserDataSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Information</button>
      </form>

      <h2>Change Password</h2>
      <form onSubmit={handlePasswordSubmit}>
        <div>
          <label>Current Password:</label>
          <input
            type="password"
            name="currentPassword"
            value={password.currentPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default AccountPage;