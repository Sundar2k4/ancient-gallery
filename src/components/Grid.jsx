import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Grid.css';

const gridItems = [
  {
    id: 'griditem1',
    image: 'kingtut.jpg',
    title: 'Pharaoh Mask',
    
  },
  {
    id: 'griditem2',
    image: 'Terracotta-Army.jpg',
    title: 'Terracotta Army',
    
  },
  {
    id: 'griditem3',
    image: 'Blombos-Cave-Paint-Bowl.jpg',
    title: 'Blombos Cave Paint Bowl',
   
  },
  {
    id: 'griditem4',
    image: 'Bone-Flute.jpg',
    title: 'Bone Flute',
   
  },
  {
    id: 'griditem5',
    image: 'Skhul-Cave-Beads.jpg',
    title: 'Skhul Cave Beads',
    
  },
  {
    id: 'griditem6',
    image: 'Lowenmensch-Figurine.jpg',
    title: 'Löwenmensch Figurine',
    
  },
  {
    id: 'griditem7',
    image: 'Rosetta.jpg',
    title: 'Rosetta Stone',
  
  },
  {
    id: 'griditem8',
    image: 'venusofhohlefels.jpg',
    title: 'Venus of Hohle Fels',
    
  },
  {
    id: 'griditem9',
    image: 'Seal-of-Indus-Valley-Civilization.jpg',
    title: 'Seal of Indus Valley Civilization',
    
  }
];

const Grid = () => {
  return (
    <div id="grid" className="grid">
      {gridItems.map(item => (
        <Link to={`/artifact/${item.id}`} key={item.id} className="griditem">
          <div className="gridimg" style={{ backgroundImage: `url(${require(`../images/${item.image}`)})` }}></div>
          <div className="details">
            <p>{item.title}</p>
            <p>{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Grid;
