import React from 'react';

import { Pages, IGenericParam, IGenericMethod, PromptAsyncType } from '@types';
import { DiscoveryDocument, TokenResponse } from 'expo-auth-session';

export interface IUseDrawerHelperReturn {
  onOpen: IGenericMethod;
  onClose: IGenericMethod;
  onToggle: IGenericMethod;
  drawerOpen: boolean;
}

export interface IUseNavigationHelperReturn {
  currentPage: Pages;
  onNavigate: IGenericParam<Pages>;
}

export interface IUseAppContextReturn {
  currentPage: Pages;
  setCurrentPage: React.Dispatch<React.SetStateAction<Pages>>;
}

export interface IUseAuthReturn {
  authTokens: TokenResponse | undefined;
  promptAsync: PromptAsyncType;
  logout: IGenericReturn<Promise<void>>;
}

export interface IUseAuthHelperReturn {
  redirectUri: string;
  discoveryDocument: DiscoveryDocument;
}
