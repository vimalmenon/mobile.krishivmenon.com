import { IGenericMethod } from '@types';

export const NotImplemented: IGenericMethod = () => {
  throw new Error('Function not implemented');
};
