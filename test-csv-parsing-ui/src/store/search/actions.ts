import { ISearchParams } from "../../types/ISearchParams";
import { ISearchResult } from "../../types/ISearchResult";

export enum ActionType {
  FetchTesterCountries = 'FETCH_TESTER_COUNTRIES',
  FetchTesterCountriesSuccess = 'FETCH_TESTER_COUNTRIES_SUCCESS',
  FetchTesterCountriesError = 'FETCH_TESTER_COUNTRIES_ERROR',
  FetchDeviceOptions = 'FETCH_DEVICE_OPTIONS',
  FetchDeviceOptionsSuccess = 'FETCH_DEVICE_OPTIONS_SUCCESS',
  FetchDeviceOptionsError = 'FETCH_DEVICE_OPTIONS_ERROR',
  Search = 'SEARCH',
  SearchSuccess = 'SEARCH_SUCCESS',
  SearchError = 'SEARCH_ERROR'
}

export interface IFetchTesterCountries {
  type: ActionType.FetchTesterCountries;
}
export const fetchTesterCountries = (
): IFetchTesterCountries => ({
  type: ActionType.FetchTesterCountries,
});

export interface IFetchTesterCountriesSuccess {
  payload: string[],
  type: ActionType.FetchTesterCountriesSuccess;
}
export const fetchTesterCountriesSuccess = (
  payload: string[]
): IFetchTesterCountriesSuccess => ({
  payload,
  type: ActionType.FetchTesterCountriesSuccess,
});

export interface IFetchTesterCountriesError {
  type: ActionType.FetchTesterCountriesError;
}
export const fetchTesterCountriesError = (
): IFetchTesterCountriesError => ({
  type: ActionType.FetchTesterCountriesError,
});

export interface IFetchDeviceOptions {
  type: ActionType.FetchDeviceOptions;
}
export const fetchDeviceOptions = (
): IFetchDeviceOptions => ({
  type: ActionType.FetchDeviceOptions,
});

export interface IFetchDeviceOptionsSuccess {
  payload: string[],
  type: ActionType.FetchDeviceOptionsSuccess;
}
export const fetchDeviceOptionsSuccess = (
  payload: string[]
): IFetchDeviceOptionsSuccess => ({
  payload,
  type: ActionType.FetchDeviceOptionsSuccess,
});

export interface IFetchDeviceOptionsError {
  type: ActionType.FetchDeviceOptionsError;
}
export const fetchDeviceOptionsError = (
): IFetchDeviceOptionsError => ({
  type: ActionType.FetchDeviceOptionsError,
});

export interface ISearch {
  payload: ISearchParams,
  type: ActionType.Search,
}
export const search = (
  payload: ISearchParams,
): ISearch => ({
  payload,
  type: ActionType.Search,
});

export interface ISearchSuccess {
  payload: ISearchResult[],
  type: ActionType.SearchSuccess;
}
export const searchSuccess = (
  payload: ISearchResult[]
): ISearchSuccess => ({
  payload,
  type: ActionType.SearchSuccess,
});

export interface ISearchError {
  type: ActionType.SearchError;
}
export const searchError = (
): ISearchError => ({
  type: ActionType.SearchError,
});


export type Action =
  | ReturnType<typeof fetchTesterCountries>
  | ReturnType<typeof fetchTesterCountriesSuccess>
  | ReturnType<typeof fetchTesterCountriesError>
  | ReturnType<typeof fetchDeviceOptions>
  | ReturnType<typeof fetchDeviceOptionsSuccess>
  | ReturnType<typeof fetchDeviceOptionsError>
  | ReturnType<typeof search>
  | ReturnType<typeof searchSuccess>
  | ReturnType<typeof searchError>;
