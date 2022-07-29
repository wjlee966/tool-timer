import React, { useEffect, useRef } from 'react';

const useInterval = (callback, renderingDeviation, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    let counter = 1;
    let timeoutId;
    const startTime = Date.now();

    const tick = () => savedCallback.current();

    function main() {
      const nowTime = Date.now();
      const nextTime = startTime + counter * delay;
      const correctedDelay = delay - (nowTime - nextTime) - renderingDeviation.current;
      timeoutId = setTimeout(main, correctedDelay);

      console.log(`deviation: ${nowTime - nextTime}`);
      console.log(`renderingDeviation: ${renderingDeviation.current}`);
      console.log(`correctedDelay: ${correctedDelay}`);

      counter += 1;
      tick();
    }

    if (delay !== null) {
      timeoutId = setTimeout(main, delay);
      return () => clearInterval(timeoutId);
    }
  }, [delay]);
};

export default useInterval;
