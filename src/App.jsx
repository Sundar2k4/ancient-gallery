import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Sidebar from './components/Sidebar';
import ArtifactDetail from './components/ArtifactDetail'; // Import the new component
import Mainpage from './components/Mainpage'; // Import the Mainpage component

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <Header 
          toggleSidebar={toggleSidebar} 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
        />
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar} 
          isLoggedIn={isLoggedIn} 
          handleLogout={handleLogout} 
        />
        <Routes>
          <Route path='/ancient-gallery' element={<Mainpage />} />
          <Route path="/grid" element={<Grid/>}/>
          <Route path="/artifact/:id" element={< ArtifactDetail/>} /> {/* New Route for Detail Page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
