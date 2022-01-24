import PropTypes from 'prop-types';
import React, { Component } from 'react';
import iconEdit from '../../img/edit.svg';

class ButtonEdit extends Component {
  render() {
    const { funcEdit } = this.props;
    return (
      <button type="button" className="edit-button" onClick={ funcEdit }>
        <img src={ iconEdit } alt="icon-edit" width="25px" />
      </button>
    );
  }
}

ButtonEdit.propTypes = {
  funcEdit: PropTypes.func,
};

ButtonEdit.defaultProps = {
  funcEdit: () => {},
};

export default ButtonEdit;
