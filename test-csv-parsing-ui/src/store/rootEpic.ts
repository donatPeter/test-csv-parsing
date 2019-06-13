import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { searchEpic } from './search/middleware';
import { ajaxClient } from '../utils/ajax';

export const rootEpic = combineEpics(
  searchEpic,
)

export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajaxClient,
  },
});