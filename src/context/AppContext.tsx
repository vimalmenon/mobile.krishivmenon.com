import React from 'react';

import { ClientId, ClientSecret } from '@data';
import { ReactChildren, Pages, IGenericReturn } from '@types';
import {
  useAuthRequest,
  exchangeCodeAsync,
  revokeAsync,
  ResponseType,
  AccessTokenRequestConfig,
  TokenResponse,
} from 'expo-auth-session';

import { AppContext as AppContextService, useAuthHelper } from './service';

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<Pages>('Login');
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [authTokens, setAuthTokens] = React.useState<TokenResponse | undefined>();
  const [authenticating, setAuthenticating] = React.useState<boolean>(false);
  const { redirectUri, discoveryDocument } = useAuthHelper();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: ClientId,
      responseType: ResponseType.Code,
      redirectUri,
      usePKCE: true,
      extraParams: {
        identity_provider: 'Google',
      },
    },
    discoveryDocument
  );
  React.useEffect(() => {
    const exchangeFn = async (exchangeTokenReq: AccessTokenRequestConfig): Promise<void> => {
      try {
        const exchangeTokenResponse = await exchangeCodeAsync(exchangeTokenReq, discoveryDocument);
        setAuthTokens(exchangeTokenResponse);
      } catch (error) {
        console.error(error);
      } finally {
        setAuthenticating(false);
      }
    };
    if (response) {
      if (response.type === 'cancel') {
        setAuthenticating(false);
        return;
      }
      setAuthenticating(true);
      if (response.type === 'success') {
        exchangeFn({
          clientId: ClientId,
          code: response.params.code,
          redirectUri,
          clientSecret: ClientSecret,
          extraParams: {
            code_verifier: request?.codeVerifier || '',
          },
        });
      }
    }
  }, [discoveryDocument, request, response]);
  const logout: IGenericReturn<Promise<void>> = async () => {
    if (authTokens) {
      const revokeResponse = await revokeAsync(
        {
          clientId: ClientId,
          token: authTokens.refreshToken || '',
        },
        discoveryDocument
      );
      if (revokeResponse) {
        setAuthTokens(undefined);
      }
    }
  };
  return (
    <AppContextService.Provider
      value={{
        authenticating,
        currentPage,
        setCurrentPage,
        drawerOpen,
        setDrawerOpen,
        authTokens,
        setAuthTokens,
        promptAsync,
        logout,
      }}
    >
      {children}
    </AppContextService.Provider>
  );
};
