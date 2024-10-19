import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
import ArtifactDetail from './components/ArtifactDetail'; // Import the new component
import Mainpage from './components/Mainpage'; // Import the Mainpage component
import Login from './components/Login'; // Import the Login component

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [showLogin, setShowLogin] = useState(false); // Manage login modal visibility

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowLogin(false); // Close the login modal on successful login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Optionally, add Firebase sign out logic here if needed
  };

  return (
    <Router>
      <div className="App">
        <Header 
          toggleSidebar={toggleSidebar} 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
          onLoginClick={() => setShowLogin(true)} // Show login modal
        />
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
        />
        
        {/* Show Login Modal if needed */}
        {showLogin && <Login onClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />}

        <Routes>
          <Route path='/ancient-gallery' element={<Mainpage />} />
          <Route path="/grid" element={<Grid/>}/>
          <Route path="/artifact/:id" element={<ArtifactDetail/>} /> {/* New Route for Detail Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
