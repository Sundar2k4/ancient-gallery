import React, { useState } from 'react';
import './Sidebar.css';
import Login from './Login'; // Assuming you have a Login component

const Sidebar = ({ isOpen, toggleSidebar, isLoggedIn, handleLogout }) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true); // Show login form
  };

  const handleCloseLogin = () => {
    setShowLogin(false); // Hide login form
  };

  return (
    <>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`} id="side">
        <li id="x" onClick={toggleSidebar}>
          <a href="/some-valid-link">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>

        {!isLoggedIn && (
          <>
            <li className="link">
              <button style={{ backgroundColor: 'black' }} onClick={handleLoginClick}>
                <p style={{ color: 'white' }}>Log In</p>
              </button>
            </li>
            <li className="link">
              <button style={{ border: '1px solid black' }}><p>Sign Up</p></button>
            </li>
          </>
        )}

        {isLoggedIn && (
          <li className="link">
            <button onClick={handleLogout} style={{ backgroundColor: 'red' }}>
              <p style={{ color: 'white' }}>Log Out</p>
            </button>
          </li>
        )}
      </ul>

      {showLogin && <Login onClose={handleCloseLogin} onLoginSuccess={() => setShowLogin(false)} />}
    </>
  );
};

export default Sidebar;
