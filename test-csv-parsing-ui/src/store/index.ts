import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { epicMiddleware, rootEpic } from './rootEpic';
import { rootReducer } from './rootReducer';

export const store = createStore(
  rootReducer,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(epicMiddleware))
    : applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);
