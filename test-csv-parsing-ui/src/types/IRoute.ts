import * as React from 'react';

export interface IRoute {
  Component: React.ComponentType<any>;
  path?: string;
  title: string;
  index?: boolean;
  id: string;
}
