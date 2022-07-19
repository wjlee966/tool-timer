import React, { useState } from 'react';
import './App.css';
import ClockScale from './ClockScale';
import NumberIndex from './NumberIndex';
import RemainingTime from './RemainingTime';
import effects from './effects';
import { useRef } from 'react';

function App() {
  const [endTime, setEndTime] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [fins, setFins] = useState([]);

  const minute = Array.from({ length: endTime }, (_, i) => i);
  const second = Array.from({ length: 60 }, (_, i) => i);

  const { audioSrc } = effects;

  const [alarmActive, setAlarmActive] = useState(false);

  const audioRef = useRef(new Audio(audioSrc));

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
              setIsActive={setIsActive}
              alarmActive={alarmActive}
              setAlarmActive={setAlarmActive}
              audioRef={audioRef}
            />
          </div>
        </div>
      </div>
      <div className='btn-container'>
        {isActive ? (
          <button className='start' onClick={() => setIsActive(false)}>
            <i className='fa fa-pause' />
          </button>
        ) : (
          <button className='start' onClick={() => setIsActive(true)}>
            <i className='fa fa-play' />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
