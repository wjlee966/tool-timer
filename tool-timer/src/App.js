import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './containers/ButtonContainer';
import ClockScaleContainer from './containers/ClockScaleContainer';
import NumberIndexContainer from './containers/NumberIndexContainer';
import RemainingTimeContainer from './containers/RemainingTimeContainer';
import alarm from './effects';
import { call } from './service/ApiService';

@inject('trackStore')
@autobind
@observer
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fins: [],
    };
  }

  onSetIsTracks(tracks) {
    this.props.trackStore.setTracks(tracks);
  }

  componentDidMount() {
    call('/track', 'GET', null).then(response => {
      this.onSetIsTracks(response.data);
    });
  }

  setFins = fins => {
    this.setState(state => ({
      fins,
    }));
  };

  render() {
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
              {/* <RemainingTimeContainer fins={this.state.fins} setFins={this.setFins} /> */}
              <RemainingTimeContainer fins={this.state.fins} setFins={this.setFins} />
            </div>
          </div>
        </div>
        <div className='btn-container'>
          <ButtonContainer />
        </div>
      </div>
    );
  }
}

export default App;
