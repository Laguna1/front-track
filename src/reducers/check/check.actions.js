import CheckActionTypes from './check.types';

export const addChecks = (checks) => ({
  type: CheckActionTypes.ADD_CHECKS,
  payload: checks,
});

export const myTraining = () => 'myTraining';
