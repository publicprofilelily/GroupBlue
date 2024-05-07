import React from 'react';
import './Grid.css'; 
import { importAll } from './imageImporter'; 

function Grid() {
  // Importing images using the importAll function
  const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="grid">
      {/* Use the imported images */}
      {Object.keys(images).map((imageName, index) => (
        <div key={index} className="grid-item">
          <img src={images[imageName].default} alt={imageName} />
        </div>
      ))}
      {/* Predefined grid */}
      {Array.from({ length: 16 }, (_, index) => (
        <div key={index} className="grid-item">{index + 1}</div>
      ))}
    </div>
  );
}

export default Grid;