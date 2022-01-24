import React, { Component } from 'react';
import imgEmpytWallet from '../../img/math.svg';
import './emptyWallet.css';

export default class EmptyWallet extends Component {
  render() {
    return (
      <div className="empty-wallet-content">
        <h3>Ainda não tem nenhuma despesa registrada!</h3>
        <div>
          <img src={ imgEmpytWallet } alt="empty-wallet-icon" width="550px" />
        </div>
      </div>
    );
  }
}
