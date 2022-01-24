import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import walletIcon from '../../img/wallet-illustration.svg';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.converCurrencies = this.convertCurrencies.bind(this);
    this.totalExpense = this.totalExpense.bind(this);
  }

  totalExpense() {
    const valueConvert = this.convertCurrencies();
    const totalValue = valueConvert.reduce((acc, curr) => Number(acc) + Number(curr), 0);
    return totalValue.toFixed(2);
  }

  convertCurrencies() {
    const { expenseValue: { expenses } } = this.props;
    if (expenses.lenght === 0) return 0;
    const currenciesConvert = expenses.map((itens) => {
      const { currency, exchangeRates, value } = itens;
      const convertValue = Number(exchangeRates[currency].ask) * Number(value);
      return convertValue.toFixed(2);
    });
    return currenciesConvert;
  }

  render() {
    const { user } = this.props;
    return (
      <div className="header-content">
        <div className="header-title">
          <img src={ walletIcon } alt="wallet-icon" width="150px" />
          <h2>TrybeWallet</h2>
        </div>
        <div>
          <span className="email-user email-user-content" data-testid="email-field">
            {`Email: ${user}`}
          </span>
          <span className="expense-user">
            Despesa Total: R$
            <span data-testid="total-field">{ this.totalExpense() }</span>
            <span data-testid="header-currency-field">
              BRL
            </span>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  expenseValue: state.wallet,
});

Header.propTypes = {
  user: PropTypes.string.isRequired,
  expenseValue: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Header);
