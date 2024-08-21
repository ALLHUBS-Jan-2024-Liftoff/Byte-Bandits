import React, { useState, useEffect } from 'react';

function AuthLight() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log("Token retrieved from localStorage in AuthLight:", token);
        setIsLoggedIn(!!token);
    }, []);

    return (
        <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: isLoggedIn ? 'green' : 'red',
            position: 'fixed',
            top: '10px',
            right: '10px'
        }}>
        </div>
    );
}

export default AuthLight;