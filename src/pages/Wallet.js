import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './header/Header';
import EmptyWallet from './emptyWallet/EmptyWallet';
import FilledWallet from './filledWallet/FilledWallet';
import Form1 from './Form1';
import './wallet.css';

class Wallet extends React.Component {
  render() {
    const {
      expenseValue,
    } = this.props;
    return (
      <>
        <Header />
        <div className="wallet-content">
          <Form1 />
          { expenseValue.length === 0 ? <EmptyWallet /> : <FilledWallet /> }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseValue: state.wallet.expenses,
});

Wallet.propTypes = {
  expenseValue: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Wallet);
