import { Action, ActionType } from './actions';
import { ISearchResult } from '../../types/ISearchResult';

export interface ISearchState {
  isLoadingTesterCountries: boolean;
  isLoadingDeviceOptions: boolean;
  isLoadingError: boolean;
  isLoadingSearchResults: boolean;
  testerCountries: string[];
  deviceOptions: string[];
  searchResults: ISearchResult[];
}

export const initialState: ISearchState = {
  isLoadingDeviceOptions: false,
  isLoadingError: false,
  isLoadingTesterCountries: false,
  isLoadingSearchResults: false,
  testerCountries: [],
  deviceOptions: [],
  searchResults: [],
};

export function searchReducer(
  state: ISearchState = initialState,
  action: Action
): ISearchState {
  switch (action.type) {
    case ActionType.FetchTesterCountries:
      return {
        ...state,
        isLoadingTesterCountries: true,
      };
    case ActionType.FetchTesterCountriesSuccess:
      return {
        ...state,
        isLoadingTesterCountries: false,
        isLoadingError: false,
        testerCountries: action.payload,
      };
    case ActionType.FetchTesterCountriesError:
      return {
        ...state,
        isLoadingTesterCountries: false,
        isLoadingError: true,
      };
    case ActionType.FetchDeviceOptions:
      return {
        ...state,
        isLoadingDeviceOptions: true
      };
    case ActionType.FetchDeviceOptionsSuccess:
      return {
        ...state,
        isLoadingError: false,
        isLoadingDeviceOptions: false,
        deviceOptions: action.payload,
      };
    case ActionType.FetchDeviceOptionsError:
      return {
        ...state,
        isLoadingDeviceOptions: false,
        isLoadingError: true,
      };
    case ActionType.Search:
      return {
        ...state,
        isLoadingSearchResults: true,
        isLoadingError: false,
      };
    case ActionType.SearchSuccess:
      return {
        ...state,
        isLoadingSearchResults: false,
        isLoadingError: false, 
        searchResults: action.payload,
      };
    case ActionType.SearchError:
      return {
        ...state,
        isLoadingSearchResults: false,
        isLoadingError: true,
      };
    default:
      return state;
  }
}

export const getDeviceOptions = (state: ISearchState) => state.deviceOptions;

export const getTesterCountries = (state: ISearchState) => state.testerCountries;

export const getSearchResults = (state: ISearchState) => state.searchResults;