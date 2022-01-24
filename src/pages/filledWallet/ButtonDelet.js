import PropTypes from 'prop-types';
import React, { Component } from 'react';
import iconDelet from '../../img/trash.svg';

class ButtonDelet extends Component {
  render() {
    const { funcDelet } = this.props;
    return (
      <button type="button" className="delet-button" onClick={ funcDelet }>
        <img src={ iconDelet } alt="icon-delet" width="25px" />
      </button>
    );
  }
}

ButtonDelet.propTypes = {
  funcDelet: PropTypes.func,
};

ButtonDelet.defaultProps = {
  funcDelet: () => {},
};

export default ButtonDelet;
