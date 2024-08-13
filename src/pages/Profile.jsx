import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Typography, Container, Paper, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <Typography variant="h6">No user is logged in.</Typography>;
  }

  const handleCancel = () => {
    navigate('/userdash');
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px' }}>
      <Paper style={{ padding: '40px', maxWidth: '700px', width: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: '4px solid #242f47' }}>
        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#242f47' }}>
          Profile
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} style={{ textAlign: 'left' }}>
            <Typography variant="h6" style={{ color: '#242f47' }}>First Name:</Typography>
            <Typography variant="body1">{user.firstName}</Typography>
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'right' }}>
            <Typography variant="h6" style={{ color: '#242f47' }}>Last Name:</Typography>
            <Typography variant="body1">{user.lastName}</Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <Typography variant="h6" style={{ color: '#242f47' }}>Email:</Typography>
            <Typography variant="body1">{user.email}</Typography>
          </Grid>
        </Grid>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="error" onClick={handleCancel} style={{ color: 'white' }}>
            Cancel
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
