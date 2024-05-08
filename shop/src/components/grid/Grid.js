import React from 'react';
import './Grid.css';


function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images.push(r(item)); });
  return images;
}

function Grid() {
  // Importing images using the importAll function
  const images = importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));

  return (
    <div class="grid">
      {images.map((imgSrc, index) => (
        <div key={index} class="grid-item">
          <img src={imgSrc} alt={`Cake ${index}`} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
        </div>
      ))}
    </div>
  );
}




export default Grid;