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

  // useEffect(() => {
  //   // Replace with  actual API call
  //   const fetchUserData = async () => {
  //     const response = await fetch('/api/user'); 
  //     setUserData(data);
  //   };
  //   fetchUserData();
  // }, []);

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

  const handleUserDataSubmit = (e) => {
    e.preventDefault();
    console.log('User data updated:', userData);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password.newPassword !== password.confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    console.log('Password updated:', password);
  };

  function UpdateUserInfo() {
    return (
      <Paper elevation={0} sx={{ border: '1px solid #ccc' }}>
        <Box
          component="form"
          onSubmit={handleUserDataSubmit}
          noValidate
          sx={{
            m: 1,
            padding: 2,
            alignContent: 'center',
            minWidth: 275,
            maxWidth: '40vw',
          }}>
          <Typography variant="h5" gutterBottom>
            Personal Info
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            type="text"
            value={userData.username}
            autoComplete="username"
            onChange={handleInputChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            type="text"
            value={userData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            type="text"
            value={userData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            type="text"
            value={userData.email}
            onChange={handleInputChange}
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
    );
  }
  
  function UpdatePassword() {
    return (
      <Paper elevation={0} sx={{ border: '1px solid #ccc', marginTop: 3 }}>
        <Box
          component="form"
          onSubmit={handlePasswordSubmit}
          noValidate
          sx={{
            m: 1,
            padding: 2,
            alignContent: 'center',
            minWidth: 275,
            maxWidth: '40vw',
          }}>
          <Typography variant="h5" gutterBottom>
            Update Password
          </Typography>
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
    );
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Typography variant="h4" paddingY={4}>
          Account Management
        </Typography>
        <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
            <Box sx={{
              padding: 1,
              textAlign: 'center',
            }}>
              <ImageUploadHandler />
              <UpdatePassword />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              padding: 1,
              textAlign: 'center',
            }}>
              <UpdateUserInfo />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default AccountPage;