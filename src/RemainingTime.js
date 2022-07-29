import React, { useEffect, useRef, useState } from 'react';
import './RemainingTime.css';
import useInterval from './useInterval';

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
  const renderingDeviation = useRef(0);

  useEffect(() => {
    if (isActive) {
      console.log('Timer Start');
      console.log('RederingStart Start');
      console.log('RederingEnd Start');
      console.time('Timer');
      console.time('RederingStart');
      console.time('RederingEnd');
    } else {
      console.log('Timer End (isActive)');
      console.timeEnd('Timer');
      console.timeEnd('RederingStart');
      console.timeEnd('RederingEnd');
    }
  }, [isActive]);

  useEffect(() => {
    setFins(
      minute
        .map((_, m) => {
          return second.map((_, s) => m * 6 + s * 0.1);
        })
        .reduce((acc, cur) => [...acc, ...cur])
    );
  }, [reset]);

  useInterval(
    () => {
      if (isActive && fins !== null) {
        console.timeLog('RederingStart');
        const renderingStartTime = Date.now();

        setFins(
          fins.filter((_, i) => {
            // console.log(`i:::${i} ...fins:::${fins} ...fins.length:::${fins.length}`);
            return i < fins.length - 1;
          })
        );
        console.timeLog('RederingEnd');
        const renderingEndTime = Date.now();
        console.log(`Redering Deviation Time: ${renderingEndTime - renderingStartTime}`);
        renderingDeviation.current = renderingEndTime - renderingStartTime;
        console.log(`renderingDeviation.current: ${renderingDeviation.current}`);

        console.timeLog('Timer');
        console.log(fins.length);
        if (!fins.length) {
          console.log(`fins.length=${fins.length}`);
          setIsActive(false);
          setAlarmActive(true);
        }
      }
    },
    renderingDeviation,
    isActive ? 1000 : null
  );

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
