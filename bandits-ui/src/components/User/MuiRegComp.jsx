import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [password, setPassword] = React.useState('');
  const [cPassword, setCPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [showError, setShowError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('');
  const [isCPasswordDirty, setIsCPasswordDirty] = React.useState(false);
  const [signUpButton, setSignUpButton] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [alertType, setAlertType] = React.useState(''); // success or error

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isCPasswordDirty) {
      if (password === cPassword) {
        setShowError(false);
        setSignUpButton(true);
        setHelperText('');
      } else {
        setShowError(true);
        setHelperText('Passwords do not match!');
        setSignUpButton(false);
      }
    }
  }, [cPassword, password, isCPasswordDirty]);

  const validateEmail = (email) => {
    // Learned this on the go.. but this is what it does Regex works by defining a pattern that specifies what you are trying to match in a string
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!validateEmail(e.target.value)) {
      setShowError(true);
      setHelperText('Invalid email address');
      setSignUpButton(false);
    } else {
      setShowError(false);
      setHelperText('');
      setSignUpButton(true);
    }
  };

  const handleCPassword = (e) => {
    setCPassword(e.target.value);
    setIsCPasswordDirty(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!validateEmail(data.get('email'))) {
      setShowError(true);
      setHelperText('Invalid email address');
      setSignUpButton(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/user/register",
        {
          username: data.get('username'),
          password: data.get('password'),
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          email: data.get('email'),
        },
        {
          headers: { 'content-type': 'application/json' },
          withCredentials: true,
        }
      );
      setAlertType('success');
      setMessage("Registration successful! Redirecting to login...");
      
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setAlertType('error');
      setMessage(error.response?.data?.message || "User has NOT been registered.");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={showError}
                  helperText={helperText}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  error={showError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="verifyPassword"
                  label="Verify Password"
                  type="password"
                  id="verifyPassword"
                  value={cPassword}
                  onChange={handleCPassword}
                  autoComplete="new-password"
                  error={showError}
                  helperText={helperText}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!signUpButton || showError}
            >
              Sign Up
            </Button>
            {message && (
              <Alert severity={alertType} sx={{ mt: 2, mb: 2 }}>
                {message}
              </Alert>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2" onClick={() => navigate("/login")}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}