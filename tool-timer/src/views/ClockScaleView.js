import React from 'react';
import './ClockScaleView.css';

const ClockScaleView = () => {
  const scale = Array.from({ length: 30 }, (_, i) => i + 1);

  return scale.map((_, i) => {
    const thin = i % 5 === 0 ? false : true;

    return (
      <div
        key={i}
        className={thin ? 'line' : 'line thick'}
        style={{ transform: `rotate(${i * 6}deg)` }}
      />
    );
  });
};

export default ClockScaleView;
