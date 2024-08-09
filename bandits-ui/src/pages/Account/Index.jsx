import { Typography } from '@mui/material'
import React, { useState } from 'react'
import LoginForm from '../../components/layout/UserAccount/LoginForm'
import RegistrationForm from '../../components/layout/UserAccount/RegistrationForm'
import { Container } from '@mui/system'

function Account() {

  const [isAutenticated,setAuthenticated] = useState(false);

  return (
      <>

      {!isAutenticated ? (
        <h1>Hello User</h1>
      )
      :(
        <Container sx={{textTransform:'capitalize',display:'flex',flexDirection:'row', flexWrap: 'wrap'}}>
        <Container sx={{ flexBasis: '50%'}}> 
          <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <LoginForm />
        </Container>
        <Container sx={{ flexBasis: '50%'}}>
          <Typography variant="h3" gutterBottom>
            Register
          </Typography>
          <RegistrationForm />
        </Container>
        </Container>
      )}
      </>
  )
}

export default Account