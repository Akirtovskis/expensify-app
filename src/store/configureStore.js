import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //Store Creation
  const store = createStore(
    combineReducers({
      expenses : expensesReducer,
      filters : filterReducer,
      auth : authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  )

  return store;
}
