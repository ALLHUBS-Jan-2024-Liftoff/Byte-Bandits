import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Login successful');
            } else {
                alert('Invalid username or password');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{textTransform:'capitalize'}}>
                <Container sx={{py:'2rem', display:'flex',flexDirection:'column', flexWrap: 'wrap'}}>
                    <FormControl sx={{ flexBasis: '80%', my:'1rem'}}>
                        <InputLabel htmlFor='userName'>Username:</InputLabel>
                            <OutlinedInput
                            type="text"
                            id="userName"
                            label="userName"
                            value={formData.username}
                            onChange={handleChange}
                            required="true"
                        />
                    </FormControl>
                    <FormControl sx={{ flexBasis: '80%', my:'1rem'}}>
                        <InputLabel htmlFor='password'>Password:</InputLabel>
                        <OutlinedInput
                            type="password"
                            name="password"
                            label='password'
                            value={formData.password}
                            onChange={handleChange}
                            required="true"
                        />
                    </FormControl>
                    <Button type="submit" sx={{ width:'15rem', background:'#555', color:'#fff','&:hover': {
                        backgroundColor: 'green', // Background color on hover
                        }}}>Login</Button>
                </Container>
            </Box>
        </form>
    );
};

export default LoginForm;
