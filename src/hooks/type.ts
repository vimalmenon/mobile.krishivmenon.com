import { IApi } from '@types';

export interface IUseQuery {
  makeApiCall: <K = unknown, T = unknown>(value: IApi<T>) => Promise<K>;
}
