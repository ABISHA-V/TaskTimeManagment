import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from './Footer';  // Assuming Footer is imported here

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setFormError('Both fields are required');
      return;
    }
    setFormError('');
    setIsLoginLoading(true);

    // Hardcoded validation
    if (email === 'a@gmail.com' && password === 'abisha') {
      // Simulate successful login
      navigate('/admindash');
    } else {
      setFormError('Invalid email or password');
    }
    
    setIsLoginLoading(false);
  };

  return (
    <div style={outerContainerStyle} className='bg-gray-200'>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <Link to='/'>
          <div style={logoStyle}>OptiTime</div></Link>
          
        </nav>
      </header>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Admin Login</h1>
        {formError && <p style={errorStyle}>{formError}</p>}
        <form style={formStyle} onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Admin Email"
            value={email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle} disabled={isLoginLoading}>
            {isLoginLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

    </div>
  );
};

// Inline styles
const outerContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f4f4f4',
};

const headerStyle = {
  backgroundColor: '#242f47',
  padding: '15px 20px',
  color: '#ffffff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
};

const navListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
};

const navItemStyle = {
  margin: '0 20px',
};

const navLinkStyle = {
  textDecoration: 'none',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

const containerStyle = {
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '400px',
  padding: '50px',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '150px auto',
};

const headingStyle = {
  fontSize: '2em',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#242f47',
  border: 'none',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
};

const errorStyle = {
  color: 'red',
  marginBottom: '10px',
};

export default AdminLogin;
