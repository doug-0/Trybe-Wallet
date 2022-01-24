// Coloque aqui suas actions
export const LOGIN_USER = 'LOGIN_USER';
export const WALLET_USER = 'WALLET_USER';

export const loginUser = (emailUser) => ({
  type: LOGIN_USER,
  emailUser,
});

export const walletUser = (stateWallet) => ({
  type: WALLET_USER,
  payload: { ...stateWallet },
});

export const actionDelet = (id) => ({
  type: 'ACTION_DELET',
  payload: id,
});

export const API_SUCCESS = (json) => ({ type: 'SUCCESS', payload: json });

export function ApiThunk() {
  return async (dispatch) => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const results = await response.json();
    dispatch(API_SUCCESS(results));
  };
}
