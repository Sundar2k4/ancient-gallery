import React from 'react';
import './Header.css';
import menuIcon from '../images/imag.jpg';
import { Navigate, useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () =>
    {
      navigate('/addart');
    }
  return (
    <header>
      <nav className="nav">
        <div className="search">
          <img src={menuIcon} alt="Logo" style={{ height: '70px' }} />
          <div style={{ color: 'black' }}>
            <h1>GALLERY OF TIME</h1>
          </div>
          <button  onClick={handleNavigate}>Add Artifacts</button>
        </div>
      </nav>
    </header>
  );
};

export default Header