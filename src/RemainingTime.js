import React, { useEffect } from 'react';
import './RemainingTime.css';

const Fin = ({ deg }) => {
  return (
    <>
      <div className='fin' style={{ transform: `rotate(${-deg}deg)` }} />
    </>
  );
};

const RemainingTime = ({ fins, setFins, minute, second, isActive }) => {
  useEffect(() => {
    setFins(
      minute
        .map((_, m) => {
          return second.map((_, s) => m * 6 + s * 0.1);
        })
        .reduce((acc, cur) => [...acc, ...cur])
    );
  }, []);

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
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fins, isActive]);

  return fins.map((deg, index) => <Fin key={index} deg={deg} />);
};

export default RemainingTime;
