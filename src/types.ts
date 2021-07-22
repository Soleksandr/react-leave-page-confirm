import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history';

export type History =
  | ReturnType<typeof createBrowserHistory>
  | ReturnType<typeof createHashHistory>
  | ReturnType<typeof createMemoryHistory>;
