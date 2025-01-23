import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../css/Login.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login', {
                username,
                password
            });
            
            const token = response.data.token;
            localStorage.setItem('token', token);  // Save the token
    
            // Optionally store the expiration time if you want to use it directly
            const decodedToken = jwtDecode(token);
            localStorage.setItem('token_expiry', decodedToken.exp);
    
            // alert('Login successful!');
            // Redirect to home page
            navigate('/'); 
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
