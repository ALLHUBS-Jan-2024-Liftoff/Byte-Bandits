import React, { useState, useEffect } from 'react';
import withRole from './withRole';

const Account = ({ setIsLoggedIn }) => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('http://localhost:8080/account', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
                setFormData({
                    username: userData.username,
                    email: userData.email
                });
            } else {
                setMessage('Failed to fetch user information');
            }
        };

        fetchUser();
    }, []);

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
            const response = await fetch('http://localhost:8080/account', {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage('Account updated successfully');
            } else {
                setMessage('Failed to update account');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to update account');
        }
    };

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:8080/logout', {
                method: 'POST',
                credentials: 'include'
            });

            if (response.ok) {
                setIsLoggedIn(false); // Update authentication state
                localStorage.setItem('isLoggedIn', 'false'); // Clear local storage
                alert('Logout successful');
            } else {
                alert('Logout failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Logout failed');
        }
    };

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Information</h2>
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
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Update Account</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default withRole(Account, 'USER');
