import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './wallet.css';

class Form2 extends Component {
  render() {
    const { handleChange } = this.props;
    const arrayTag = ['----', 'Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const arrayMethod = ['----', 'Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <>
        Metodo de pagamento:
        <select
          name="method"
          className="element-from"
          data-testid="method-input"
          onChange={ handleChange }
        >
          { arrayMethod.map((el) => (<option key={ el }>{ el }</option>)) }
        </select>
        Tag:
        <select
          name="tag"
          className="element-from"
          data-testid="tag-input"
          onChange={ handleChange }
        >
          { arrayTag.map((el) => (<option key={ el }>{ el }</option>)) }
        </select>
        Descrição:
        <input
          name="description"
          type="text"
          className="element-from"
          data-testid="description-input"
          onChange={ handleChange }
        />
      </>
    );
  }
}

Form2.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Form2;
