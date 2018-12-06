import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import * as selectors from './selectors';
import * as actions from './actions';

import { rootSaga } from './sagas';
import { reducer } from './reducers';

export const createEPAStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store
}

export default createEPAStore();

export { selectors, actions };

