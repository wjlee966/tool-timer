import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import RemainingTimeView from '../views/RemainingTimeView';

@inject('finStore')
@autobind
@observer
class RemainingTimeContainer extends Component {
  onSetIsActive(isActive) {
    this.props.finStore.setIsActive(isActive);
  }

  render() {
    const { fins, setFins, finStore } = this.props;

    return (
      <RemainingTimeView
        fins={fins}
        setFins={setFins}
        minute={finStore.minute}
        second={finStore.second}
        isActive={finStore.isActive}
        setIsActive={this.onSetIsActive}
        isFast={finStore.isFast}
        reset={finStore.reset}
      />
    );
  }
}

export default RemainingTimeContainer;
