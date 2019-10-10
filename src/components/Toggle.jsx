import React, { Component } from 'react';

class Toggle extends Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    const {
      children,
      openLabel = 'Further information',
      closeLabel = 'Hide'
    } = this.props;
    return (
      <>
        {open && children}
        <button onClick={this.toggleOpen}>
          {open ? closeLabel : openLabel}
        </button>
      </>
    );
  }
  toggleOpen = () => {
    this.setState(currentState => {
      return { open: !currentState.open };
    });
  };
}

export default Toggle;
