import React from 'react';
import './Header.css';
import menuIcon from '../images/imag.jpg';

const Header = ({ toggleSidebar, handleLoginClick }) => {
  return (
    <header>
      <nav className="nav">
        <div className="search">
          <img src={menuIcon} alt="Logo" style={{ height: '70px' }} />
          <div><h1>GALLERY OF TIME</h1></div>
          <li className="menu">
            <a href="/some-valid-path" id="menu" onClick={toggleSidebar}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </a>
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Header