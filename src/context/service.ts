import React from 'react';

import { AuthUrl } from '@data';
import { useNavigation } from '@react-navigation/native';
import {
  IAppContext,
  NavigationProps,
  Pages,
  IGenericMethod,
  IGenericReturn,
  IGenericParam,
} from '@types';
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
  currentPage: 'Home',
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
  const navigation = useNavigation<NavigationProps>();
  const { currentPage, setCurrentPage, setDrawerOpen } = React.useContext<IAppContext>(AppContext);
  const onNavigate: IGenericParam<Pages> = (value) => {
    setCurrentPage(value);
    navigation.navigate(value);
    setDrawerOpen(false);
  };
  return {
    currentPage,
    onNavigate,
  };
};

export const useAuth: IGenericReturn<IUseAuthReturn> = () => {
  const { authTokens, promptAsync, logout } = React.useContext<IAppContext>(AppContext);
  return {
    logout,
    authTokens,
    promptAsync,
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
