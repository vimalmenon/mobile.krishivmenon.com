import React from 'react';

import { ReactChildren, Pages } from '@types';

import { AppContext as AppContextService } from './service';

export const AppContext: React.FC<ReactChildren> = ({ children }) => {
  const [currentPage, setCurrentPage] = React.useState<Pages>('Home');
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  return (
    <AppContextService.Provider value={{ currentPage, setCurrentPage, drawerOpen, setDrawerOpen }}>
      {children}
    </AppContextService.Provider>
  );
};
