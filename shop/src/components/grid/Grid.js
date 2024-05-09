import React from 'react';
//import './Grid.css';
import data from './../../data/cakes.json';

function Grid() {

  return <div class="grid grid-cols-4 gap-10">
    {data.map(cake => (
      <div key={cake.picture} className="grid-item ">
        <div class=" bg-white  duration-500 hover:scale-105 hover:shadow-xl relative">
          <img src={cake.picture} alt={`Cake ${cake.name}`} class="object-cover rounded-md w-60 shadow-md rounded-md" />
          <div class="px-4 py-3 font-bold absolute right-[-10px] bg-white p-1 border-[1px] bottom-[-10px]">
            <p class="text-xl block tracking-wider text-shadow">{cake.price} :-</p>
          </div>
        </div>
        <div class="w-60">
          <p class="pt-4 pb-[20px] truncate text-lg tracking-wider shadow-pink-950">{cake.name}</p>
        </div>
      </div >
    ))
    }
  </div >
}

export default Grid;