import React, { Component } from 'react';
import RemainingTimeView from '../views/RemainingTimeView';

class RemainingTimeContainer extends Component {
  render() {
    const { fins, setFins, minute, second, isActive, setIsActive, isFast, reset } = this.props;

    return (
      <RemainingTimeView
        fins={fins}
        setFins={setFins}
        minute={minute}
        second={second}
        isActive={isActive}
        setIsActive={setIsActive}
        isFast={isFast}
        reset={reset}
      />
    );
  }
}

export default RemainingTimeContainer;
