import React from 'react';

import { AuthUrl } from '@data';
import { LoginPage, Pages, PageMap } from '@pages/data';
import {
  IApi,
  IAppContext,
  IBaseResponse,
  IGenericMethod,
  IGenericReturn,
  INotes,
  IProfile,
} from '@types';
import axios from 'axios';
import { createURL } from 'expo-linking';

import { apis } from './data';
import {
  IUseDrawerHelperReturn,
  IUseNavigationHelperReturn,
  IUseAuthReturn,
  IUseAuthHelperReturn,
  IUseApiHelper,
  IUseNotesReturn,
  IUseProfileReturn,
} from './types';
import { NotImplemented } from '../utility';

export const AppContext = React.createContext<IAppContext>({
  authenticating: undefined,
  currentPage: LoginPage,
  setCurrentPage: NotImplemented,
  drawerOpen: false,
  setDrawerOpen: NotImplemented,
  authTokens: undefined,
  setAuthTokens: NotImplemented,
  promptAsync: NotImplemented,
  logout: NotImplemented,
  loadingNotes: false,
  setLoadingNotes: NotImplemented,
  notes: [],
  setNotes: NotImplemented,
  profile: undefined,
  setProfile: NotImplemented,
});

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
  const { currentPage, setCurrentPage } = React.useContext<IAppContext>(AppContext);
  return {
    Pages,
    PageMap,
    currentPage,
    setCurrentPage,
  };
};

export const useAuth: IGenericReturn<IUseAuthReturn> = () => {
  const { authTokens, promptAsync, logout, authenticating } =
    React.useContext<IAppContext>(AppContext);
  return {
    logout,
    authTokens,
    promptAsync,
    authenticating,
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

export const useProfile: IGenericReturn<IUseProfileReturn> = () => {
  const { profile, setProfile } = React.useContext<IAppContext>(AppContext);
  const { makeApiCall, apis } = useApiHelper();
  React.useEffect(() => {
    if (!profile) {
      getProfile();
    }
  }, []);
  const getProfile: IGenericReturn<Promise<void>> = async () => {
    const profile = await makeApiCall<IProfile>(apis.getProfile());
    setProfile(profile);
  };
  return {
    profile,
  };
};

export const useApiHelper: IGenericReturn<IUseApiHelper> = () => {
  const { authTokens } = useAuth();
  const instance = React.useMemo(
    () =>
      axios.create({
        headers: {
          Authorization: authTokens?.idToken || '',
        },
      }),
    [authTokens?.idToken]
  );
  function makeApiCall<K = unknown, T = unknown>(value: IApi<T>): Promise<K> {
    return instance
      .request<IBaseResponse<K>>(value)
      .then((result) => result.data)
      .then((result) => {
        return result.data;
      })
      .catch((result) => {
        throw new Error(result.message);
      });
  }

  return {
    apis,
    makeApiCall,
  };
};

export const useNotes: IGenericReturn<IUseNotesReturn> = () => {
  const { loadingNotes, notes, setNotes, setLoadingNotes } =
    React.useContext<IAppContext>(AppContext);
  const { makeApiCall, apis } = useApiHelper();
  const addNote = async (note: INotes): Promise<void> => {
    const notes = await makeApiCall<INotes[], INotes>(apis.addNote(note));
    setNotes(notes);
  };
  const deleteNote = async (note: INotes): Promise<void> => {
    const notes = await makeApiCall<INotes[]>(apis.deleteNote(note.id || ''));
    setNotes(notes);
  };
  const getNotes: IGenericReturn<Promise<void>> = async () => {
    setLoadingNotes(true);
    const data = await makeApiCall<INotes[]>(apis.getNotes());
    setNotes(data);
    setLoadingNotes(false);
  };
  const newNote: INotes = React.useMemo(
    () => ({
      title: '',
      content: '',
      metadata: {},
    }),
    []
  );
  return {
    notes,
    newNote,
    addNote,
    getNotes,
    deleteNote,
    loadingNotes,
  };
};
