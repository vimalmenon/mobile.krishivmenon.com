import { ReactNode, Dispatch, SetStateAction } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IGenericMethod = () => void;
export type IGenericReturn<T> = () => T;
export type IGenericParam<T> = (v: T) => void;
export type IGeneric<T, K> = (v: T) => K;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export type Pages = 'Home' | 'Gallery' | 'Notes' | 'Login';

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
  name: Pages;
  component: AnyType;
  icon: string;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
