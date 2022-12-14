import React from 'react';
import './Song.css';

const Song = ({song,handleAddToCart}) => {
  const {name, cover, details, duration, album} = song;
  return (
    <div className='song'>
      <img src={cover} alt="song-cover" />
      <h2>{name}</h2>
      <p>{details}</p>
      <p>Album: {album}</p>
      <p>Song Duration: {duration} minute</p>
      <button onClick={()=>handleAddToCart(song)} className='add-btn'>Add To List</button>
    </div>
  );
};

export default Song;