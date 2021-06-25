import CheckActionTypes from './check.types';
import { defaultChecks } from './check.data';

const INITIAL_STATE = {
  foos: defaultChecks,
};

const checkReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CheckActionTypes.ADD_CHECKS:
      return {
        ...state,
        checks: action.payload,
      };
    default:
      return state;
  }
};

export default checkReducer;
