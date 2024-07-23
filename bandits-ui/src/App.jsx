import { useState } from 'react'
import RecipeTable from './components/RecipeTable'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box, Button, Container, Typography } from '@mui/material'
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
          color:'#eee',
          padding: 4,
          my:2
        }}
      >
        <Container>
          <Typography variant="h1" gutterBottom>
            Welcome to Our Website
          </Typography>
          <Typography variant="h2" paragraph>
            We offer the best solutions to enhance your productivity and performance.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>
    </div>
  )
}

export default App
