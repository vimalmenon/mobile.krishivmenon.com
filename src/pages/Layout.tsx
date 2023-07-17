import React from 'react';

import { ReactChildren } from '@types';

export const Layout: React.FC<ReactChildren> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
