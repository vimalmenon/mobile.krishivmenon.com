import React from 'react';

import { IAppContext } from '@types';

import { NotImplemented } from '../utility';

export const AppContext = React.createContext<IAppContext>({
  currentPage: 'Home',
  setCurrentPage: NotImplemented,
  drawerOpen: false,
  setDrawerOpen: NotImplemented,
});

export const useAppContext = () => {
  const { currentPage, setCurrentPage } = React.useContext<IAppContext>(AppContext);
  return {
    currentPage,
    setCurrentPage,
  };
};

export const useDrawerHelper = () => {
  const { drawerOpen, setDrawerOpen } = React.useContext<IAppContext>(AppContext);
  const onOpen = () => {
    setDrawerOpen(true);
  };
  const onClose = () => {
    setDrawerOpen(false);
  };
  const onToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  return {
    drawerOpen,
    onToggle,
    onOpen,
    onClose,
  };
};
