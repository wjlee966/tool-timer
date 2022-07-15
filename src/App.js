import React, { useState } from 'react';
import './App.css';
import ClockScale from './ClockScale';
import NumberIndex from './NumberIndex';
import RemainingTime from './RemainingTime';

function App() {
  const [endTime, setEndTime] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [fins, setFins] = useState([]);

  const minute = Array.from({ length: endTime }, (_, i) => i);
  const second = Array.from({ length: 60 }, (_, i) => i);

  const toggle = () => setIsActive(isActive => !isActive);

  return (
    <div className='container'>
      <div className='timer-container'>
        <div className='timer'>
          <div className='box-area'>
            <div className='cover1' />
            <div className='cover2' />
            <ClockScale />
            <NumberIndex />
          </div>
          <div className='scale-area'>
            <RemainingTime
              fins={fins}
              setFins={setFins}
              minute={minute}
              second={second}
              isActive={isActive}
            />
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <button className='start' onClick={toggle}>
          {isActive ? <i className='fa fa-pause' /> : <i className='fa fa-play' />}
        </button>
      </div>
    </div>
  );
}

export default App;
