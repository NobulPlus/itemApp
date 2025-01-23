import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');  // Get token from localStorage

    if (!token) {
        // If no token, redirect to login page
        return <Navigate to="/login" />;
    }

    try {
        // Decode the token
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;  // Current time in seconds

        if (decoded.exp < currentTime) {
            // If token has expired, clear the token and redirect to login
            localStorage.removeItem('token');
            return <Navigate to="/login" />;
        }
    } catch (error) {
        // If the token is invalid or cannot be decoded, redirect to login
        localStorage.removeItem('token');
        return <Navigate to="/login" />;
    }

    return children;  // Render children (Home, AddItem) if authenticated and token is valid
};

export default PrivateRoute;
