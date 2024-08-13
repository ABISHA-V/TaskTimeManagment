import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const TermsOfService = () => {
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
      
      <h1 style={headingStyle}>Terms of Service</h1>
      <p style={paragraphStyle}>
        Welcome to our task management application. By using our application, you agree to the following terms and conditions:
      </p>
      <h2 style={subheadingStyle}>1. Acceptance of Terms</h2>
      <p style={paragraphStyle}>
        By accessing or using our application, you agree to be bound by these terms. If you do not agree to these terms, please do not use our application.
      </p>
      <h2 style={subheadingStyle}>2. Use of the Application</h2>
      <p style={paragraphStyle}>
        You may use our application only for lawful purposes and in accordance with these terms. You agree not to use our application:
        <ul style={listStyle}>
          <li>In any way that violates any applicable national or international law or regulation</li>
          <li>For the purpose of exploiting, harming, or attempting to exploit or harm others</li>
          <li>To transmit or procure the sending of any unsolicited or unauthorized advertising or promotional material</li>
        </ul>
      </p>
      <h2 style={subheadingStyle}>3. Account Responsibilities</h2>
      <p style={paragraphStyle}>
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
      </p>
      <h2 style={subheadingStyle}>4. Changes to the Application</h2>
      <p style={paragraphStyle}>
        We reserve the right to modify or discontinue the application (or any part of it) without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the application.
      </p>
      <h2 style={subheadingStyle}>5. Termination</h2>
      <p style={paragraphStyle}>
        We may terminate or suspend your account immediately, without prior notice or liability, if you breach any terms of these terms of service.
      </p>
      <h2 style={subheadingStyle}>6. Limitation of Liability</h2>
      <p style={paragraphStyle}>
        In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
        <ul style={listStyle}>
          <li>Your use or inability to use the application</li>
          <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
          <li>Any interruption or cessation of transmission to or from the application</li>
        </ul>
      </p>
      <h2 style={subheadingStyle}>7. Governing Law</h2>
      <p style={paragraphStyle}>
        These terms shall be governed and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law principles.
      </p>
      <h2 style={subheadingStyle}>8. Changes to These Terms</h2>
      <p style={paragraphStyle}>
        We may update our Terms of Service from time to time. We will notify you of any changes by posting the new Terms of Service on this page.
      </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
