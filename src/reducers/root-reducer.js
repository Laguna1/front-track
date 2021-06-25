import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import checkReducer from './check/check.reducer';

const rootReducer = combineReducers({
  check: checkReducer,
  session: sessionReducer,
});

export default rootReducer;
