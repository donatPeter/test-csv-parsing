import * as React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import { GLOBAL_ROUTES } from '../../../constants/routeConfig';
import { store } from '../../../store';

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Router>
            {GLOBAL_ROUTES.map(({ Component, path, title, index, id }) => (
              <Component
                key={id}
                path={path}
                title={title}
                default={index}
              />
            ))}
          </Router>
        </React.Fragment>
      </Provider>
    );
  }
}
