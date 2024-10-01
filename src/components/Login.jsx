import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Firebase import
import { auth } from './firebaseConfig'; // Import the Firebase config
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
      setError('Failed to login. Please check your credentials.');
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
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
