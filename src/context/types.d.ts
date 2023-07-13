import React from 'react';

import { Pages, IGenericParam, IGenericMethod } from '@types';

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
