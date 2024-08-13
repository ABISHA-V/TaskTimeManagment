


import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button, Link as MuiLink } from '@mui/material';
import { useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const email = useRef(null);
    const password = useRef(null);
    const [error, setError] = useState({ email: false, password: false });
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/api/register/login', {
                email: email.current.value,
                password: password.current.value,
            });

            if (response.status === 200) {
                console.log("Login successful", response.data);
                // Save user data to localStorage if needed
                localStorage.setItem('user', JSON.stringify(response.data));
                navigate('/userdash'); // Navigate to the user dashboard on successful login
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setLoginError('Invalid email or password');
            } else {
                setLoginError('An error occurred. Please try again.');
            }
        }

        setError({
            email: !email.current.value,
            password: !password.current.value,
        });
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: '100%',
                height: '100vh',
                backgroundColor: '#f5f5f5',
                padding: '20px',
                boxSizing: 'border-box'
            }}
            noValidate
            autoComplete="off"
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px'
                }}
            >
                <Typography sx={{ textAlign: 'center', marginBottom: '20px' }} variant='h4'>LOGIN</Typography>
                {loginError && <Typography color="error" sx={{ marginBottom: '20px' }}>{loginError}</Typography>}
                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                    <TextField 
                        inputRef={email} 
                        id="outlined-basic" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth
                        error={error.email}
                        helperText={error.email && "Fill the email"}
                    />
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                    <TextField 
                        inputRef={password} 
                        id="standard-basic" 
                        type="password" 
                        label="Password" 
                        variant="outlined" 
                        fullWidth
                        error={error.password}
                        helperText={error.password && "Fill the password"}
                    />
                </Box>
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={{ marginBottom: '10px', width: '100%', backgroundColor:'#242f47' }}
                >
                    SUBMIT
                </Button>
                <MuiLink component={Link} to="/register" underline="none" sx={{ marginTop: '10px', color: '#1976d2' }}>
                    New user? Register
                </MuiLink>
            </Box>
        </Box>
    );
}
