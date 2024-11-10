import React from 'react';
import './Header.css';
import menuIcon from '../images/imag.jpg';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="search">
          <img src={menuIcon} alt="Logo" style={{ height: '70px' }} />
          <div style={{ color: 'black' }}>
            <h1>GALLERY OF TIME</h1>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Header