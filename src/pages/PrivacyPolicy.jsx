import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  const containerStyle = {
    padding: '60px',
    maxWidth: '900px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: '#f9f9f9', // Light background color
    color: '#333', // Text color
  };

  const headingStyle = {
    fontSize: '2.5rem',
    borderBottom: '3px solid #B85042', // Color matching the theme
    paddingBottom: '10px',
    marginBottom: '20px',
    color: '#B85042', // Color matching the theme
  };

  const subheadingStyle = {
    fontSize: '1.75rem',
    marginTop: '20px',
    marginBottom: '15px',
    color: '#B85042', // Color matching the theme
  };

  const paragraphStyle = {
    fontSize: '1rem',
    marginBottom: '20px',
    color: '#666', // Light text color
  };

  const listStyle = {
    margin: '10px 0',
    paddingLeft: '20px',
    color: '#666', // Light text color
  };

  return (
    <div>
        
    <div style={containerStyle}>
      
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p style={paragraphStyle}>
        This privacy policy explains how we collect, use, and protect your personal data when you use our task management application.
      </p>
      <h2 style={subheadingStyle}>What information do we collect?</h2>
      <p style={paragraphStyle}>
        We collect the following information:
        <ul style={listStyle}>
          <li>Your name and email address</li>
          <li>Your task lists and tasks</li>
          <li>Your activity logs</li>
        </ul>
      </p>
      <h2 style={subheadingStyle}>How do we use your information?</h2>
      <p style={paragraphStyle}>
        We use your information to:
        <ul style={listStyle}>
          <li>Provide you with access to our task management application</li>
          <li>Improve our application and services</li>
          <li>Contact you about updates and changes to our application</li>
        </ul>
      </p>
      <h2 style={subheadingStyle}>How do we protect your information?</h2>
      <p style={paragraphStyle}>
        We take the following measures to protect your information:
        <ul style={listStyle}>
          <li>We use encryption to protect your data in transit</li>
          <li>We use secure servers to store your data</li>
          <li>We limit access to your data to authorized personnel</li>
        </ul>
      </p>
      <h2 style={subheadingStyle}>Changes to this policy</h2>
      <p style={paragraphStyle}>
        We may update this policy from time to time. We will notify you of any changes by posting the updated policy on our website.
      </p>
      </div>
     <Footer/>
    </div>
     
  );
};

export default PrivacyPolicy;
