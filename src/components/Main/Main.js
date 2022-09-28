import React, { useState } from 'react';
import data from '../../songs.json';
import Activites from '../Activities/Activites';
import Songs from '../Songs/Songs';
import logo from '../../icon.png'
import './Main.css';

const Main = () => {
  const [songs, setSongs] = useState([]);

  const handleAddToCart = (selectedSong) => {
    const songsArray = [...songs, selectedSong];
    console.log("clicked");
    setSongs(songsArray)
  }

  return (
    <div className='main-container'>
      <div className='songs-container'>
        <div className='site-header'>
          <img src={logo} alt="" />
          <h2>LISTEN-THE-BEST</h2>
        </div>
      <Songs songs={data} handleAddToCart={handleAddToCart}></Songs>
      </div>
      <Activites songs={songs}></Activites>
    </div>
  );
};

export default Main;