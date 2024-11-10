import React from 'react';
import './Mainpage.css'; // Optional: create this CSS file for styling
import Grid from './Grid';
import Header from './Header.jsx'

const Mainpage = () => {
  return (
    <div className="homepage">
      <Header/>
      <Grid/>
    </div>
  );
};

export default Mainpage;
