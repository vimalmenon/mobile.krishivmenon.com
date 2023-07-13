import { ReactNode, Dispatch, SetStateAction } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IGenericMethod = () => void;
export type IGenericReturn<T> = () => T;
export type IGenericParam<T> = (v: T) => void;
export type IGeneric<T, K> = (v: T) => K;

export type Pages = 'Home' | 'Gallery' | 'Notes';

export type RootStackParamList = {
  Home: undefined;
  Gallery: undefined;
  Notes: undefined;
  Login: undefined;
};

export interface ReactChildren {
  children: ReactNode;
}

export interface IAppContext {
  currentPage: Pages;
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  token: string | undefined;
  setToken: Dispatch<SetStateAction<string | undefined>>;
}

export interface IPage {
  name: string;
  component: any;
  icon: string;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
