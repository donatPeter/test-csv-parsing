import { IRoute } from '../types/IRoute';

import { SearchPage } from '../pages/SearchPage/connect';

export const GLOBAL_ROUTES: IRoute[] = [
  {
    Component: SearchPage,
    id: 'search-page',
    path: `/`,
    title: 'Search Page',
  },
];
