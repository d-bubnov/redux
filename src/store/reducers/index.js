import { combineReducers } from 'redux';

import { assessorsReducer } from './assessors';

export const reducer = combineReducers({
  assessors: assessorsReducer
});
