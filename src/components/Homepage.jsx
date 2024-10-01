import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login'; 
import './Homepage.css'; // Optional: create this CSS file for styling

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // Use the navigate hook for routing

  const handleLoginClick = () => {
    setShowLogin(true); // Show login form
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Hide login form
  };

  const handleLoginSuccess = () => {
    setShowLogin(false); // Hide login form
    navigate('/grid'); // Redirect to the main page after successful login
  };

  return (
    <div className="homepage">
      <header>
        <h1>Welcome to the Gallery of Time</h1>
        <button onClick={handleLoginClick} className="login-button">Log In</button>
      </header>
      
      {/* Render the Login component if showLogin is true */}
      {showLogin && <Login onClose={handleCloseLogin} onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
};

export default Homepage;

