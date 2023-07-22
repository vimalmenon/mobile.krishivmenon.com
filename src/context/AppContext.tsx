import React from 'react';

import { ClientId, ClientSecret } from '@data';
import { LoginPage, HomePage } from '@pages/data';
import { ReactChildren, IGenericReturn, AuthType, IPage } from '@types';
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
  const [currentPage, setCurrentPage] = React.useState<IPage>(LoginPage);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [authTokens, setAuthTokens] = React.useState<TokenResponse | undefined>();
  const [authenticating, setAuthenticating] = React.useState<AuthType>();
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
        setCurrentPage(HomePage);
      } catch (error) {
        console.error(error);
      } finally {
        setAuthenticating(undefined);
      }
    };
    if (response) {
      if (response.type === 'cancel') {
        setAuthenticating(undefined);
        return;
      }
      setAuthenticating('Authenticating');
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
      setDrawerOpen(false);
      setAuthenticating('Logout');
      const revokeResponse = await revokeAsync(
        {
          clientId: ClientId,
          clientSecret: ClientSecret,
          token: authTokens.refreshToken || '',
        },
        discoveryDocument
      );
      if (revokeResponse) {
        setAuthTokens(undefined);
      }
      setAuthenticating(undefined);
      setCurrentPage(LoginPage);
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
