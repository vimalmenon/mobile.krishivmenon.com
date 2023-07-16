import React from 'react';

import { Pages, IGenericMethod, PromptAsyncType } from '@types';
import { DiscoveryDocument, TokenResponse } from 'expo-auth-session';

export interface IUseDrawerHelperReturn {
  onOpen: IGenericMethod;
  onClose: IGenericMethod;
  onToggle: IGenericMethod;
  drawerOpen: boolean;
}

export interface IUseNavigationHelperReturn {
  currentPage: Pages;
  onNavigate: <T = unknown>(name: Pages, params?: T) => void;
}

export interface IUseAppContextReturn {
  currentPage: Pages;
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

export interface IUseAuthReturn {
  authenticating: boolean;
  authTokens: TokenResponse | undefined;
  promptAsync: PromptAsyncType;
  logout: IGenericReturn<Promise<void>>;
}

export interface IUseAuthHelperReturn {
  redirectUri: string;
  discoveryDocument: DiscoveryDocument;
}
