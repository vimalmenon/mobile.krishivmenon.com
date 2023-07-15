import React from 'react';

import { useAuth } from '@context';
import { IApi, IBaseResponse } from '@types';
import axios from 'axios';

export const useQuery = () => {
  const { authTokens } = useAuth();
  const instance = React.useMemo(
    () =>
      axios.create({
        headers: {
          Authorization: authTokens?.idToken || '',
        },
      }),
    [authTokens?.idToken]
  );
  function makeApiCall<K = unknown, T = unknown>(value: IApi<T>): Promise<K> {
    return instance
      .request<IBaseResponse<K>>(value)
      .then((result) => result.data)
      .then((result) => {
        return result.data;
      })
      .catch((result) => {
        throw new Error(result.message);
      });
  }

  return {
    makeApiCall,
  };
};
