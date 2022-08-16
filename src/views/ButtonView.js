import React from 'react';
import './ButtonView.css';

const ButtonView = ({ isActive, setIsActive, setIsFast, setReset }) => {
  return (
    <>
      {isActive ? (
        <button
          className='start'
          onClick={() => {
            setIsActive(false);
            setIsFast(false);
          }}
        >
          <i className='fa fa-pause' />
        </button>
      ) : (
        <button
          className='start'
          onClick={() => {
            setIsActive(true);
            setIsFast(false);
          }}
        >
          <i className='fa fa-play' />
        </button>
      )}
      <button
        disabled={isActive}
        className='start'
        onClick={() => {
          setIsActive(true);
          setIsFast(true);
        }}
      >
        <i className='fa fa-fighter-jet' />
      </button>
      <button className='start' onClick={() => setReset(prev => !prev)}>
        <i className='fa fa-repeat' />
      </button>
    </>
  );
};

export default ButtonView;
