import React from 'react';

import { IGenericMethod, PromptAsyncType, AuthType, IPage, Pages } from '@types';
import { DiscoveryDocument, TokenResponse } from 'expo-auth-session';

export interface IUseDrawerHelperReturn {
  onOpen: IGenericMethod;
  onClose: IGenericMethod;
  onToggle: IGenericMethod;
  drawerOpen: boolean;
}

export interface IUseNavigationHelperReturn {
  Pages: IPage[];
  PageMap: Record<Pages, IPage>;
  currentPage: IPage;
  setCurrentPage: React.Dispatch<React.SetStateAction<IPage>>;
}
export interface IUseAuthReturn {
  authenticating: AuthType;
  authTokens: TokenResponse | undefined;
  promptAsync: PromptAsyncType;
  logout: IGenericReturn<Promise<void>>;
}

export interface IUseAuthHelperReturn {
  redirectUri: string;
  discoveryDocument: DiscoveryDocument;
}
