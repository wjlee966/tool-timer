import React, { useEffect, useRef } from 'react';
import './RemainingTimeView.css';
import useInterval from '../useInterval';
import { observer } from 'mobx-react';

const Fin = ({ deg }) => {
  return (
    <>
      <div className='fin' style={{ transform: `rotate(${-deg}deg)` }} />
    </>
  );
};

const RemainingTimeView = observer(
  ({ fins, setFins, minute, second, isActive, setIsActive, isFast, reset }) => {
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
        console.log('Timer End (Pause Timer)');
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
          renderingDeviation.current = renderingEndTime - renderingStartTime;
          console.log(`Redering Deviation Time: ${renderingDeviation.current}`);

          console.timeLog('Timer');
          console.log(fins.length);
          if (!fins.length) {
            console.log(`fins.length=${fins.length}`);
            setIsActive(false);
          }
        }
      },
      renderingDeviation.current,
      isActive ? (isFast ? 1 : 1000) : null
    );

    return fins.map((deg, index) => <Fin key={index} deg={deg} />);
  }
);

export default RemainingTimeView;
