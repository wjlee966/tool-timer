import React, { useRef } from 'react';
import './NumberIndex.css';

const NumberIndex = () => {
  const index = Array.from({ length: 6 }, (_, i) => i + 1);

  const left = useRef(15);
  const right = useRef(45);

  return index.map((_, i) => {
    const leftText = left.current - 5 * i;

    return (
      <div key={i} className='num-box' style={{ transform: `rotate(${i * 30}deg)` }}>
        <span style={{ transform: `rotate(${-30 * i}deg)` }}>
          {leftText < 0 ? 60 + leftText : leftText}
        </span>
        <span style={{ transform: `rotate(${-30 * i}deg)` }}>{right.current - 5 * i}</span>
      </div>
    );
  });
};

export default NumberIndex;
