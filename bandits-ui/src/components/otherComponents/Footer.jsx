import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#282c34',
        color: 'white',
        padding: '20px',
        textAlign: 'center',
        position: 'fixed',
        bottom: 0,
        left:0,
        width: '100%',
        boxShadow: '0 -1px 5px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="inherit">
          &copy; 2024 Balanced Bytes. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Link href="#about" color="inherit" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="#services" color="inherit" sx={{ mx: 1 }}>
            Services
          </Link>
          <Link href="#contact" color="inherit" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
)
}
export default Footer