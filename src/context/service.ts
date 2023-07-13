import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  IAppContext,
  NavigationProps,
  Pages,
  IGenericMethod,
  IGenericReturn,
  IGenericParam,
} from '@types';
// import { authorize } from 'react-native-app-auth';

// const config = {
//   clientId: '<YOUR_CLIENT_ID>',
//   redirectUrl: 'com.myclientapp://myclient/redirect',
//   serviceConfiguration: {
//     authorizationEndpoint: '<YOUR_DOMAIN_NAME>/oauth2/authorize',
//     tokenEndpoint: '<YOUR_DOMAIN_NAME>/oauth2/token',
//     revocationEndpoint: '<YOUR_DOMAIN_NAME>/oauth2/revoke',
//   },
// };

import { IUseAppContextReturn, IUseDrawerHelperReturn, IUseNavigationHelperReturn } from './types';
import { NotImplemented } from '../utility';

export const AppContext = React.createContext<IAppContext>({
  currentPage: 'Home',
  setCurrentPage: NotImplemented,
  drawerOpen: false,
  setDrawerOpen: NotImplemented,
  token: undefined,
  setToken: NotImplemented,
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

export const useAuth = () => {
  const { token } = React.useContext<IAppContext>(AppContext);
  return {
    token,
  };
};
