import React, { useEffect } from 'react';
import './RemainingTime.css';

const Fin = ({ deg }) => {
  return (
    <>
      <div className='fin' style={{ transform: `rotate(${-deg}deg)` }} />
    </>
  );
};

const RemainingTime = ({
  fins,
  setFins,
  minute,
  second,
  isActive,
  setIsActive,
  alarmActive,
  setAlarmActive,
  audioRef,
  reset,
  setReset,
}) => {
  useEffect(() => {
    setFins(
      minute
        .map((_, m) => {
          return second.map((_, s) => m * 6 + s * 0.1);
        })
        .reduce((acc, cur) => [...acc, ...cur])
    );
  }, [reset]);

  useEffect(() => {
    let interval = null;

    if (isActive && fins !== null) {
      interval = setInterval(() => {
        setFins(
          fins.filter((_, i) => {
            // console.log(`i:::${i} ...fins.length:::${fins.length}`);
            return i < fins.length - 1;
          })
        );
        if (!fins.length) {
          console.log(`fins.length=${fins.length}`);
          setIsActive(false);
          setAlarmActive(true);
        }
      }, 1000);
    } else {
      // console.log('clear fins interval');
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [fins, isActive]);

  useEffect(() => {
    if (alarmActive) {
      audioRef.current.play();
      console.log(`duration = ${audioRef.current.duration}`);
      console.log(`alarmActive = ${alarmActive}`);
    } else {
      // audioRef.current.pause();
      // console.log(`alarmActive = ${alarmActive}`);
    }
  }, [alarmActive]);

  useEffect(() => {
    audioRef.current.addEventListener('ended', () => setAlarmActive(false));
    return () => audioRef.current.addEventListener('ended', () => setAlarmActive(false));
  }, []);

  return fins.map((deg, index) => <Fin key={index} deg={deg} />);
};

export default RemainingTime;
