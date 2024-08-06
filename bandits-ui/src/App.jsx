import React from 'react';
import { useState } from 'react';
import RecipeTable from './components/RecipeTable';
import Header from './components/Header';
import Footer from './components/Footer';
import { Box, Button, Container, Typography } from '@mui/material';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

function App() {
  const[isLoggedin, setIsloggedIn] = useState(false);

   // Load authentication state from localStorage when the app initializes
   useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
        setIsLoggedIn(true);
    }
}, []);

// Save authentication state to localStorage whenever it changes
useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
}, [isLoggedIn]);

  return (
    <div className='App'>
   
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: `url('src/img/bg-img-hero.jpeg') `,
          backgroundSize: 'cover',
          textAlign: 'center',
          color: '#333',
          padding: 4,
          my: 2
        }}
      >
        <Container sx={{ bgcolor: 'rgba(175, 161, 168, 0.50)', p: 5 }}>
          <Typography variant="h1" gutterBottom>
            Healthy Eating Made Easy
          </Typography>
          <Typography variant="h2" paragraph>
            Customizable Meal Plans for Every Lifestyle
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: 'green' }} size="large">
            Get Started.
          </Button>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 4
          }}
        >
         
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            my: 4
          }}
        >
            {!isLoggedIn ? (
                        <>
                            <Typography variant="h3" gutterBottom>
                                Register
                            </Typography>
                            <RegistrationForm />
                            <Typography variant="h3" gutterBottom>
                                Login
                            </Typography>
                            <LoginForm setIsloggedIn={setIsloggedIn}/>
                        </>
                    ) : (
                        <Account setIsloggedIn={setIsloggedIn}/>
                    )}
                </Box>
            </Container>
        </div>
    );
          
}

export default App;