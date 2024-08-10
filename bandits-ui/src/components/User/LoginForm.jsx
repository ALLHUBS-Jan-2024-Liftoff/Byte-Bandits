import React, { useState } from 'react';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const[sessionId, setSessionId] = useState('');
    const [error, setError] = useState('');

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
            const responseData = await response.text();

            if (response.ok) {
                alert(responseData);
                const sessionIdMatch = responseData.match(/Session ID: (\w+)/);
                if (sessionIdMatch) {
                    setSessionId(sessionIdMatch[1]);
                    alert('Login successful. Session ID: ' + sessionIdMatch[1]);
                }
            } else {
                setError(responseData);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Login failed');
        }
    };



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Login</button>
            {sessionId && (
                <div>
                    <p>Session ID: {sessionId}</p>
                </div>
            )}
            {error && (
                <div>
                    <p style={{ color: 'red' }}>{error}</p>
                </div>
            )}
        </form>
    );
};

export default LoginForm;