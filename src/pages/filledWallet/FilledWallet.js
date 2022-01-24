import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionDelet } from '../../actions';
import ButtonDelet from './ButtonDelet';
import ButtonEdit from './ButtonEdit';
import './filledWallet.css';

class FilledWallet extends Component {
  constructor() {
    super();
    this.clickDelet = this.clickDelet.bind(this);
    this.clickEdit = this.clickEdit.bind(this);
  }

  clickDelet() {
    const { actionDeletLine } = this.props;
    actionDeletLine();
    console.log('delet click');
  }

  clickEdit() {
    console.log('edit click');
  }

  render() {
    const { wallet: { expenses } } = this.props;
    return (
      <div className="filled-wallet-content">
        <table className="table-wallet">
          <tbody>
            <tr>
              <th className="table-column">Descrição</th>
              <th className="table-column">Tag</th>
              <th className="table-column">Método de pagamento</th>
              <th className="table-column">Valor</th>
              <th className="table-column">Moeda</th>
              <th className="table-column">Câmbio utilizado</th>
              <th className="table-column">Valor convertido</th>
              <th className="table-column">Moeda de conversão</th>
              <th className="table-column">Editar/Excluir</th>
            </tr>
          </tbody>
          {
            expenses.map((el) => {
              const {
                value, currency, id,
                method, tag, description, exchangeRates } = el;
              return (
                <tbody key={ id }>
                  <tr>
                    <td>{ description }</td>
                    <td>{ tag }</td>
                    <td>{ method }</td>
                    <td>{ value }</td>
                    <td>{ exchangeRates[currency].name }</td>
                    <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
                    <td>{ Number(exchangeRates[currency].ask * value).toFixed(2) }</td>
                    <td> Real</td>
                    <td className="td-buttons">
                      <ButtonEdit funcEdit={ () => this.clickEdit() } />
                      <ButtonDelet funcDelet={ () => this.clickDelet() } />
                    </td>
                  </tr>
                </tbody>
              );
            })
          }
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ wallet: state.wallet });

const mapDispatchToProps = (dispatch) => ({
  actionDeletLine: () => dispatch(actionDelet()),
});

FilledWallet.propTypes = {
  actionDeletLine: PropTypes.func.isRequired,
  wallet: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilledWallet);
