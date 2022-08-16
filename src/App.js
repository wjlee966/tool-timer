import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './containers/ButtonContainer';
import ClockScaleContainer from './containers/ClockScaleContainer';
import NumberIndexContainer from './containers/NumberIndexContainer';
import RemainingTimeContainer from './containers/RemainingTimeContainer';
import alarm from './effects';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      endTime: 25,
      fins: [],
      isActive: false,
      isFast: false,
      reset: false,
    };
  }

  setEndTime = minute => {
    this.setState(state => ({
      endTime: minute,
    }));
  };

  setFins = fins => {
    this.setState(state => ({
      fins,
    }));
  };

  setIsActive = isActive => {
    this.setState(state => ({
      isActive,
    }));
  };

  setIsFast = isFast => {
    this.setState(state => ({
      isFast,
    }));
  };

  setReset = reset => {
    this.setState(state => ({
      reset,
    }));
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const minute = Array.from({ length: this.state.endTime }, (_, i) => i);
    const second = Array.from({ length: 60 }, (_, i) => i);

    return (
      <div className='container'>
        <div className='timer-container'>
          <div className='timer'>
            <div className='box-area'>
              <div className='cover1' />
              <div className='cover2' />
              <ClockScaleContainer />
              <NumberIndexContainer />
            </div>
            <div className='scale-area'>
              <RemainingTimeContainer
                fins={this.state.fins}
                setFins={this.setFins}
                minute={minute}
                second={second}
                isActive={this.state.isActive}
                setIsActive={this.setIsActive}
                isFast={this.state.isFast}
                reset={this.state.reset}
              />
            </div>
          </div>
        </div>
        <div className='btn-container'>
          <ButtonContainer
            isActive={this.state.isActive}
            setIsActive={this.setIsActive}
            setIsFast={this.setIsFast}
            setReset={this.setReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
