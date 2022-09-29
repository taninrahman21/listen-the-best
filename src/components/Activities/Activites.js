import React from 'react';
import { useState } from 'react';
import './Activites.css';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()

const Activities = ({songs}) => {
  const [breakTime, setBreakTime] = useState(false);
  const getBreakTimeFromLC = localStorage.getItem("break-time");
  const handleBreakTime = event =>{
    setBreakTime(event.target.textContent);
    localStorage.setItem("break-time", event.target.textContent);
  }
  const notify = ()=>{
    toast.success("Your activities is Totally Complited!", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  
  let totalListenTime = 0;
  for(const song of songs){
    totalListenTime += song.duration;
  }
 
  return (
    <div>
        <div className="activities">
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
          <span onClick={handleBreakTime} className='break-element'>20s</span>
          <span onClick={handleBreakTime} className='break-element'>15s</span>
          <span onClick={handleBreakTime} className='break-element'>10s</span>
          <span onClick={handleBreakTime} className='break-element'>25s</span>
        </div>
        <div className="listen-details">
          <h2>Listen Details</h2>
          <div className='listen-time'>
            <p>Listen Time</p>
            <p>{totalListenTime} minute</p>
          </div>
          <div className='break-time'>
            <p>Break Time</p>
            <p>{breakTime ? breakTime : getBreakTimeFromLC}</p>
          </div>
        </div>
        <button onClick={notify} className='complited-btn'>Activity Complited</button>
        <ToastContainer/>
        </div>
    </div>
  );
};

export default Activities;