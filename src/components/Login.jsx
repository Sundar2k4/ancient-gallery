import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase imports
import { auth } from './firebaseConfig'; // Import your Firebase config
import './Login.css'; // Import your login styles

const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState(''); // Email state
  const [password, setPassword] = useState(''); // Password state
  const [error, setError] = useState(''); // Error state

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Try logging in with Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      onLoginSuccess(); // Call the onLoginSuccess callback after successful login
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        // If user does not exist, attempt to create a new account
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          alert('User registered and logged in successfully');
          onLoginSuccess(); // Call the onLoginSuccess callback after successful registration
        } catch (registerErr) {
          console.error(registerErr); // Log the error to the console
          setError(registerErr.message || 'Failed to register. Please check your details.');
        }
      } else {
        setError(err.message || 'Failed to login. Please check your credentials.');
      }
    }
  };

  return (
    <div className="login-container">
      <button className="close-button" onClick={onClose}>X</button> {/* Close button */}
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Ensure email is provided
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Ensure password is provided
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
