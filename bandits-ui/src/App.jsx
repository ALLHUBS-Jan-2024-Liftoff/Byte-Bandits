import React from 'react';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const App = () => {
    return (
        <div>
            <h1>Register</h1>
            <RegistrationForm />
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default App;
