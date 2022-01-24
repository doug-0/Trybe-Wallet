// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_USER } from '../actions/index';

const INITIAL_STATE = {
  expenses: [],
};

function userWalletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_USER:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        action.payload,
      ],
    };
  default:
    return { ...state };
  }
}

export default userWalletReducer;
