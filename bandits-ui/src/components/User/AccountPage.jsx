import React, { useEffect, useState } from "react";
import axios from "axios";
import ImageUploadHandler from "./ImageUploadHandler";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getCurrentUser } from "../../services/AuthService";
import { updateUserPassword } from '../../services/ReviewService';

const defaultTheme = createTheme();

const newUser = getCurrentUser();

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

  // useEffect will fetch the current user data and populate the users data from the backend In :UserController /current
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token){
        throw new Error("No token found");
      }
      const response = await axios.get('http://localhost:8080/user/current', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('User Data:', response.data);
        const { username, firstName, lastName, email } = response.data;
      setUserData({
        username,
        firstName,
        lastName,
        email,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {  
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // updates user email or name
  const handleUserDataSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.put('http://localhost:8080/user/update', userData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
  
      console.log('User data updated:', response.data);
  
      setUserData(response.data);
  
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword){
      console.error('Passwords do not match');
      return;
    }
    updateUserPassword(password.currentPassword, password.confirmPassword)
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Typography variant="h4" paddingY={4}>
          Account Management
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              padding: 1,
              textAlign: 'center',
            }}>
              <ImageUploadHandler />
              <Paper elevation={0} sx={{ border: '1px solid #ccc', padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Personal Info
                </Typography>
                <Box component="form" onSubmit={handleUserDataSubmit} noValidate>
                  <TextField
                    label="Username"
                    name="username"
                    value={userData.username}  // <-- Bind username to state
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    InputProps={{ readOnly: true }} // Username is read-only
                  />
                  <TextField
                    label="First Name"
                    name="firstName"
                    value={userData.firstName}  // <-- Bind first name to state
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    value={userData.lastName}  // <-- Bind last name to state
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={userData.email}  // <-- Bind email to state
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update Info
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              padding: 1,
              textAlign: 'center',
            }}>
              <Paper elevation={0} sx={{ border: '1px solid #ccc', padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Update Password
                </Typography>
                <Box component="form" onSubmit={handlePasswordSubmit} noValidate>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="currentPassword"
                    label="Current Password"
                    name="currentPassword"
                    type="password"
                    value={password.currentPassword}
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="newPassword"
                    label="New Password"
                    name="newPassword"
                    type="password"
                    value={password.newPassword}
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Confirm New Password"
                    name="confirmPassword"
                    type="password"
                    value={password.confirmPassword}
                    autoComplete="confirm-password"
                    onChange={handlePasswordChange}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update Password
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default AccountPage;