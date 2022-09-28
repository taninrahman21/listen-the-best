import React from 'react';
import './Activites.css';

const Activites = () => {
  return (
    <div className='activities'>
        <h2 className='name'>Md Tanin Rahman</h2>
        <p className='title'>Front-End Web Devloper</p>
        <div className="details">
          <div>
            <span>5.6feet</span>
            <h3>Heigth</h3>
          </div>
          <div>
            <span>58kg</span>
            <h3>Weight</h3>
          </div>
          <div>
            <span>21</span>
            <h3>Age</h3>
          </div>
        </div>
        <h2>Add a Break</h2>
        <div className="break-time">
          <span>20s</span>
          <span>15s</span>
          <span>10s</span>
          <span>25s</span>
        </div>
        <div className="listen-details">
          <h2>Listen Details</h2>
          <p>Listen Time</p>
          <p>Break Time</p>
        </div>
        <button className='complited-btn'>Activity Complited</button>
    </div>
  );
};

export default Activites;