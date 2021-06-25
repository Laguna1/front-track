import { createSelector } from 'reselect';

const selectCheck = (state) => state.check;

export const selectChecks = createSelector(
  [selectCheck],
  (check) => check.checks,
);

export const myTraining = () => 'myTraining';
