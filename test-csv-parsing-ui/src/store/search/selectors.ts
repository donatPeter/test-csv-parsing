import { createSelector } from 'reselect';

import { IRootState } from '../rootReducer';

import {
  getDeviceOptions,
  getTesterCountries,
  getSearchResults,
  ISearchState
} from './'

const createSearchSelector = createSelector(
  (state: IRootState): ISearchState => state.search,
  (search: ISearchState): ISearchState => search
);

export const selectDeviceOptions = createSelector(
  createSearchSelector,
  getDeviceOptions
);

export const selectTesterCountries = createSelector(
  createSearchSelector,
  getTesterCountries
);

export const selectSearchResults = createSelector(
  createSearchSelector,
  getSearchResults
);