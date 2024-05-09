import React from 'react';
import './Grid.css';
import data from './../../assets/cake_description.json';

function Grid() {

  return <div class="grid gap-4">
    {data.map(cake => (
      <div key={cake.picture} className="grid-item">
        <img src={cake.picture} alt={`Cake ${cake.name}`} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
      </div>
    ))}
  </div>
}

export default Grid;