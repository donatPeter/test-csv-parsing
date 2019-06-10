import { combineReducers } from 'redux';

import { searchReducer as search, ISearchState } from './search';

export interface IRootState {
  search: ISearchState;
};

export const rootReducer = combineReducers({
  search,
});
