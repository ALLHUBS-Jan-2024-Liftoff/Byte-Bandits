import { useState } from 'react'
import RecipeTable from './components/RecipeTable'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box, Button, Container, Typography } from '@mui/material'
import RegistrationPage from './components/RegistrationPage.jsx'
function App() {

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
          backgroundImage:`url('src/img/bg-img-hero.jpeg') `,
          backgroundSize:'cover',
          textAlign: 'center',
          color:'#333',
          padding: 4,
          my:2
        }}
      >
        <Container sx={{bgcolor:'rgba(175, 161, 168, 0.50)', p:5}}>
          <Typography variant="h1" gutterBottom>
          Healthy Eating Made Easy
          </Typography>
          <Typography variant="h2" paragraph>
          Customizable Meal Plans for Every Lifestyle
          </Typography>
          <Button href="/registration" component={RegistrationPage} variant="contained" sx={{backgroundColor:'green'}} size="large">
            Get Started.
          </Button>
        </Container>
      </Box>
    </div>
  )
}

export default App
