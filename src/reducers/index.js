// import user from './user';
// import wallet from './wallet';
import { combineReducers } from 'redux';
import userReducer from './user';
import userWalletReducer from './wallet';

const reducer = combineReducers({
  user: userReducer,
  wallet: userWalletReducer,
});

export default reducer;
// Configure os seus reducers.
// ATENÇÃO: você obrigatoriamente tem que utilizar as chaves "user" e "wallet" no seu estado global
