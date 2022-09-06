import { observer } from 'mobx-react';
import React from 'react';
import './ButtonView.css';

const ButtonView = observer(({ isActive, setIsActive, setIsFast, setReset }) => {
  return (
    <>
      {isActive ? (
        <button
          className='btn'
          onClick={() => {
            setIsActive(false);
            setIsFast(false);
          }}
        >
          <i className='fa fa-pause' />
        </button>
      ) : (
        <button
          className='btn'
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
        className='btn'
        onClick={() => {
          setIsActive(true);
          setIsFast(true);
        }}
      >
        <i className='fa fa-fighter-jet' />
      </button>
      <button className='btn' onClick={() => setReset(prev => !prev)}>
        <i className='fa fa-repeat' />
      </button>
    </>
  );
});

export default ButtonView;
