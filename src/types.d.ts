import { ReactNode, Dispatch, SetStateAction } from 'react';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthRequestPromptOptions, AuthSessionResult, TokenResponse } from 'expo-auth-session';

export type IGenericMethod = () => void;
export type IGenericReturn<T> = () => T;
export type IGenericParam<T> = (v: T) => void;
export type IGeneric<T, K> = (v: T) => K;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AuthType = 'Authenticating' | 'Logout' | undefined;

export type Pages = 'Home' | 'Gallery' | 'Notes' | 'Login' | 'NoteDetail';

export type PageType = 'Common' | 'Note' | undefined;

export type PromptAsyncType = (options?: AuthRequestPromptOptions) => Promise<AuthSessionResult>;

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Gallery: undefined;
  Notes: undefined;
  NoteDetail: INotes;
};

export interface ReactChildren {
  children: ReactNode;
}

export interface IPage {
  name: Pages;
  component: AnyType;
  icon: string;
  title: string;
  showInDrawer: boolean;
  showDrawer: boolean;
  pageType: PageType;
}

export interface IAppContext {
  authenticating: AuthType;
  currentPage: IPage;
  setCurrentPage: Dispatch<SetStateAction<IPage>>;
  drawerOpen: boolean;
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  authTokens: TokenResponse | undefined;
  setAuthTokens: Dispatch<SetStateAction<TokenResponse | undefined>>;
  promptAsync: PromptAsyncType;
  logout: IGenericReturn<Promise<void>>;
}

export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export type MethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface IApi<T = unknown> {
  baseURL: string;
  url: string;
  method?: MethodType;
  data?: T;
  params?: Record<string, string>;
  headers?: Record<string, string>;
}

export interface IBaseResponse<T = unknown> {
  message: string;
  data: T;
  code: number;
}

export interface IBaseDB {
  createdBy?: string;
  createdDate?: string;
  updatedDate?: string;
}

export interface INotes extends IBaseDB {
  id?: string;
  title: string;
  content: string;
  metadata: Record<string, string>;
}

export interface IProfile extends IBaseDB {
  name: string;
  role: string;
  email: string;
  avatar: string;
  provider: string;
}
