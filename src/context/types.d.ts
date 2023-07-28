import React from 'react';

import {
  IGenericMethod,
  PromptAsyncType,
  AuthType,
  IPage,
  Pages,
  IGenericReturn,
  IApi,
  IGeneric,
  INotes,
  IProfile,
} from '@types';
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

export interface IApis {
  getNotes: IGenericReturn<IApi>;
  getProfile: IGenericReturn<IApi>;
  addNote: IGeneric<INotes, IApi<INotes>>;
  updateNote: IGeneric<INotes, IApi<INotes>>;
  deleteNote: IGeneric<string, IApi>;
}

export interface IUseApiHelper {
  makeApiCall: <K = unknown, T = unknown>(value: IApi<T>) => Promise<K>;
  apis: IApis;
}

export interface IUseNotesReturn {
  notes: INotes[];
  newNote: INotes;
  saveNote: IGeneric<INotes, Promise<void>>;
  getNotes: IGenericReturn<Promise<void>>;
  deleteNote: IGeneric<INotes, Promise<void>>;
  loadingNotes: boolean;
}

export interface IUseProfileReturn {
  profile: IProfile | undefined;
}
