import React from 'react';
import Activites from '../Activities/Activites';
import Songs from '../Songs/Songs';
import './Main.css';

const Main = () => {
  return (
    <div className='main-container'>
      <div className='songs-container'>
      <h2>LISTEN-THE-BEST</h2>
      <Songs></Songs>
      </div>
      <Activites></Activites>
    </div>
  );
};

export default Main;