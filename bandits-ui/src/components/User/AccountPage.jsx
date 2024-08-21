import React, { useEffect, useState } from "react";
import { fetchUserData, updateUserPassword, updateUserDetails } from "../../services/userService";
import ImageUploadHandler from "./ImageUploadHandler";
import AuthLight from "../otherComponents/AuthLight";

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

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await fetchUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    getUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
  };

  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserDetails(userData);
      console.log('User data updated successfully');
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }

    try {
      await updateUserPassword(password.currentPassword, password.newPassword);
      console.log('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div>
      <AuthLight />
      <h1>Account Management</h1>

      <div>
        <label>Username:</label>
        <p>{userData.username}</p>
      </div>

      {isEditing ? (
        <form onSubmit={handleUserDataSubmit}>
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
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <div>
            <label>First Name:</label>
            <p>{userData.firstName}</p>
          </div>
          <div>
            <label>Last Name:</label>
            <p>{userData.lastName}</p>
          </div>
          <div>
            <label>Email:</label>
            <p>{userData.email}</p>
          </div>
          <button onClick={() => setIsEditing(true)}>Edit Information</button>
        </>
      )}

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

      <h2>Upload Profile Picture</h2>
      <ImageUploadHandler />
    </div>
  );
};

export default AccountPage;