import {createStore, compose, applyMiddleware} from 'redux';
// Import thunk middleware
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState,
    applyMiddleware(thunk)
  );
}
