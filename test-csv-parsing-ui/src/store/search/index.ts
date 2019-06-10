import { Action, ActionType } from './actions';

export interface ISearchState {
  
}

export const initialState: ISearchState = {
};

export function searchReducer(
  state: ISearchState = initialState,
  action: Action
): ISearchState {
  switch (action.type) {
    case ActionType.Add:
      return state;
    default:
      return state;
  }
}
