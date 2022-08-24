import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import ButtonView from '../views/ButtonView';

@inject('finStore')
@autobind
@observer
class ButtonContainer extends Component {
  onSetIsActive(isActive) {
    this.props.finStore.setIsActive(isActive);
  }

  onSetIsFast(isFast) {
    this.props.finStore.setIsFast(isFast);
  }

  onSetReset(reset) {
    this.props.finStore.setReset(reset);
  }

  render() {
    const { finStore } = this.props;

    return (
      <ButtonView
        isActive={finStore.isActive}
        setIsActive={this.onSetIsActive}
        setIsFast={this.onSetIsFast}
        setReset={this.onSetReset}
      />
    );
  }
}

export default ButtonContainer;
