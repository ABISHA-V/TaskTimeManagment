
import React, { useRef, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button, Link as MuiLink } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
    let firstName = useRef(null);
    let lastName = useRef(null);
    let email = useRef(null);
    let password = useRef(null);

    const [error, setError] = useState({ firstName: false, lastName: false, email: false, password: false });
    const [serverError, setServerError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (firstName.current.value && lastName.current.value && email.current.value && password.current.value) {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.current.value)) {
                setError((prev) => ({ ...prev, email: true }));
            } else {
                setError((prev) => ({ ...prev, email: false }));
                const user = {
                    firstName: firstName.current.value,
                    lastName: lastName.current.value,
                    email: email.current.value,
                    password: password.current.value
                };

                try {
                    const response = await axios.post('http://localhost:8080/api/register', user);
                    console.log(response.data);
                    navigate('/login');
                } catch (error) {
                    console.error('There was an error registering the user:', error.response.data);
                    setServerError(error.response.data);
                }
            }
        } else {
            setError({
                firstName: !firstName.current.value,
                lastName: !lastName.current.value,
                email: !email.current.value,
                password: !password.current.value,
            });
        }
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
                backgroundColor: '#f0f2f5',
                padding: '20px',
                boxSizing: 'border-box'
            }}
            noValidate
            autoComplete="off"
        >
            <Box
                sx={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '400px'
                }}
            >
                <Typography sx={{ textAlign: 'center', marginBottom: '20px', fontWeight: 'bold' }} variant='h4'>REGISTER</Typography>
                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                    <TextField 
                        inputRef={firstName} 
                        id="outlined-basic" 
                        label="First Name" 
                        variant="outlined" 
                        fullWidth
                        error={error.firstName}
                        helperText={error.firstName && "Fill the first name"}
                    />
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                    <TextField 
                        inputRef={lastName} 
                        id="outlined-basic" 
                        label="Last Name" 
                        variant="outlined" 
                        fullWidth
                        error={error.lastName}
                        helperText={error.lastName && "Fill the last name"}
                    />
                </Box>
                <Box sx={{ width: '100%', marginBottom: '20px' }}>
                    <TextField 
                        inputRef={email} 
                        id="filled-basic" 
                        label="Email" 
                        variant="outlined" 
                        fullWidth
                        error={error.email}
                        helperText={error.email && "Enter a valid email"}
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
                {serverError && (
                    <Typography sx={{ color: 'red', marginBottom: '10px' }}>
                        {serverError}
                    </Typography>
                )}
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={{ marginBottom: '10px', width: '100%', backgroundColor: '#242f47'}}
                >
                    SUBMIT
                </Button>
                <MuiLink component={Link} to="/login" underline="none" sx={{ marginTop: '10px', color: '#1976d2' }}>
                    Already registered? Login
                </MuiLink>
            </Box>
        </Box>
    );
}
