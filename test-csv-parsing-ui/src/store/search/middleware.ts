import { combineEpics, Epic, ofType } from 'redux-observable';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

import * as ENDPOINTS from '../../constants/endpoints';

import {
  Action,
  ActionType,
  fetchDeviceOptionsError,
  fetchDeviceOptionsSuccess,
  fetchTesterCountriesSuccess,
  fetchTesterCountriesError,
  searchError,
  searchSuccess,
  ISearch,
} from './actions';

export const fetchDeviceOptions: Epic<any> = (
  action$,
  _,
  deps
) => {
  return action$.pipe(
    ofType(ActionType.FetchDeviceOptions),
    switchMap(() => {
      return deps.ajaxClient.get(ENDPOINTS.DEVICES).pipe(
        mergeMap(
          (response: string[]): Action[] => [
            fetchDeviceOptionsSuccess(response),
          ]
        ),
        catchError(() => {
          return [fetchDeviceOptionsError()];
        })
      )
    }
    )
  );
};

export const fetchTesterCountries: Epic<any> = (
  action$,
  _,
  deps
) => {
  return action$.pipe(
    ofType(ActionType.FetchTesterCountries),
    switchMap(() => {
      return deps.ajaxClient.get(ENDPOINTS.TESTER_COUNTRIES).pipe(
        mergeMap(
          (response: string[]): Action[] => [
            fetchTesterCountriesSuccess(response),
          ]
        ),
        catchError(() => {
          return [fetchTesterCountriesError()];
        })
      )
    }
    )
  );
};

export const search: Epic<any> = (
  action$,
  _,
  deps
) => {
  return action$.pipe(
    ofType(ActionType.Search),
    switchMap(({ payload }: ISearch) => {
      return deps.ajaxClient.post(ENDPOINTS.SEARCH, payload).pipe(
        mergeMap(
          ({ response }: any): Action[] => [
            searchSuccess(response),
          ]
        ),
        catchError(() => {
          return [searchError()];
        })
      )
    }
    )
  );
};

export const searchEpic = combineEpics(
  fetchDeviceOptions,
  fetchTesterCountries,
  search
);
