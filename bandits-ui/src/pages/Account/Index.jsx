import { Typography } from '@mui/material'
import React from 'react'
import LoginForm from '../../components/layout/UserAccount/LoginForm'
import RegistrationForm from '../../components/layout/UserAccount/RegistrationForm'

function Account() {
  return (
    <div>Account
      <Typography variant="h3" gutterBottom>
            Login
          </Typography>
          <LoginForm />
          <Typography variant="h3" gutterBottom>
            Register
          </Typography>
          <RegistrationForm />
    </div>
  )
}

export default Account