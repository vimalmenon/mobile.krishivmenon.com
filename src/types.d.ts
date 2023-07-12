import { ReactNode, Dispatch, SetStateAction } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type Pages = 'Home' | 'Gallery' | 'Notes';

export type RootStackParamList = {
  Home: undefined;
  Gallery: undefined;
  Notes: undefined;
};

export interface ReactChildren {
  children: ReactNode;
}

export interface IAppContext {
  currentPage: Pages;
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
