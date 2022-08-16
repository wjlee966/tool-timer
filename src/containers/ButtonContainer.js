import React, { Component } from 'react';
import ButtonView from '../views/ButtonView';

class ButtonContainer extends Component {
  render() {
    const { isActive, setIsActive, setIsFast, setReset } = this.props;

    return (
      <ButtonView
        isActive={isActive}
        setIsActive={setIsActive}
        setIsFast={setIsFast}
        setReset={setReset}
      />
    );
  }
}

export default ButtonContainer;
