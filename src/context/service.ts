import React from 'react';

import { AuthUrl, apis } from '@data';
import { useQuery } from '@hooks';
import { LoginPage } from '@pages/data';
import { IAppContext, IGenericMethod, IGenericReturn, IProfile } from '@types';
import { createURL } from 'expo-linking';

import {
  IUseAppContextReturn,
  IUseDrawerHelperReturn,
  IUseNavigationHelperReturn,
  IUseAuthReturn,
  IUseAuthHelperReturn,
} from './types';
import { NotImplemented } from '../utility';

export const AppContext = React.createContext<IAppContext>({
  authenticating: undefined,
  currentPage: LoginPage,
  setCurrentPage: NotImplemented,
  drawerOpen: false,
  setDrawerOpen: NotImplemented,
  authTokens: undefined,
  setAuthTokens: NotImplemented,
  promptAsync: NotImplemented,
  logout: NotImplemented,
});

export const useAppContext: IGenericReturn<IUseAppContextReturn> = () => {
  const { currentPage, setCurrentPage } = React.useContext<IAppContext>(AppContext);
  return {
    currentPage,
    setCurrentPage,
  };
};

export const useDrawerHelper: IGenericReturn<IUseDrawerHelperReturn> = () => {
  const { drawerOpen, setDrawerOpen } = React.useContext<IAppContext>(AppContext);
  const onOpen: IGenericMethod = () => {
    setDrawerOpen(true);
  };
  const onClose: IGenericMethod = () => {
    setDrawerOpen(false);
  };
  const onToggle: IGenericMethod = () => {
    setDrawerOpen(!drawerOpen);
  };
  return {
    drawerOpen,
    onToggle,
    onOpen,
    onClose,
  };
};

export const useNavigationHelper: IGenericReturn<IUseNavigationHelperReturn> = () => {
  const { currentPage, setCurrentPage } = React.useContext<IAppContext>(AppContext);
  return {
    currentPage,
    setCurrentPage,
  };
};

export const useAuth: IGenericReturn<IUseAuthReturn> = () => {
  const { authTokens, promptAsync, logout, authenticating } =
    React.useContext<IAppContext>(AppContext);
  return {
    logout,
    authTokens,
    promptAsync,
    authenticating,
  };
};

export const useAuthHelper: IGenericReturn<IUseAuthHelperReturn> = () => {
  const redirectUri = createURL('/');
  const discoveryDocument = React.useMemo(
    () => ({
      authorizationEndpoint: AuthUrl + '/oauth2/authorize',
      tokenEndpoint: AuthUrl + '/oauth2/token',
      revocationEndpoint: AuthUrl + '/oauth2/revoke',
    }),
    [AuthUrl]
  );
  return {
    redirectUri,
    discoveryDocument,
  };
};

export const useProfile = () => {
  const { makeApiCall } = useQuery();
  const [profile, setProfile] = React.useState<IProfile>();
  React.useEffect(() => {
    getProfile();
  }, []);
  const getProfile: IGenericReturn<Promise<void>> = async () => {
    const profile = await makeApiCall<IProfile>(apis.getProfile());
    setProfile(profile);
  };
  return {
    profile,
  };
};
