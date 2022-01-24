import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletUser, ApiThunk } from '../actions/index';
import Form2 from './Form2';
import './wallet.css';

class Form1 extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCurrencies = this.getCurrencies.bind(this);

    this.state = {
      id: -1,
      value: 0,
      currency: 'USD',
      method: '----',
      tag: '----',
      description: '',
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { requestAPI } = this.props;
    requestAPI();
  }

  async getCurrencies() {
    const responseAPI = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json());
    delete responseAPI.USDT;
    return responseAPI;
  }

  async handleClick() {
    let { id } = this.state;
    const { infoUserWallet } = this.props;
    const exchangeRates = await this.getCurrencies();
    this.setState({ exchangeRates, id: id += 1 });
    infoUserWallet(this.state);
    this.setState({ value: 0 });
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const newArray = ['USD', 'CAD', 'EUR', 'GBP', 'ARS',
      'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH', 'XRP',
    ];
    const { value } = this.state;
    return (
      <div>
        <form className="expense-form">
          Valor:
          <input
            value={ value }
            name="value"
            type="number"
            className="element-from expense-value"
            data-testid="value-input"
            onChange={ this.handleChange }
          />
          <label htmlFor="currency" className="htmlfor">
            <span className="htmlfor">Moedas:</span>
            <select
              name="currency"
              id="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {newArray.map((el) => (<option key={ el } value={ el }>{el}</option>))}
            </select>
          </label>
          <Form2 handleChange={ this.handleChange } />
          <button
            type="button"
            className="element-from"
            onClick={ () => this.handleClick() }
          >
            <strong>Adicionar despesa</strong>
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  infoUserWallet: (stateWallet) => (
    dispatch(walletUser(stateWallet))),
  requestAPI: () => dispatch(ApiThunk()),
});

Form1.propTypes = {
  infoUserWallet: PropTypes.func.isRequired,
  requestAPI: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Form1);
