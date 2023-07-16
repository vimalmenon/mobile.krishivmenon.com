import React from 'react';

import { useAppContext, useDrawerHelper } from '@context';
import { PageMap } from '@pages';
import { ReactChildren } from '@types';
import { Drawer as ReactDrawer } from 'react-native-drawer-layout';

import { DrawerNavigation } from './DrawerNavigation';

export const Drawer: React.FC<ReactChildren> = ({ children }) => {
  const { drawerOpen, onOpen, onClose } = useDrawerHelper();
  const { currentPage } = useAppContext();
  const selectedPage = PageMap[currentPage];
  if (selectedPage.showDrawer) {
    return (
      <ReactDrawer
        open={drawerOpen}
        onOpen={onOpen}
        onClose={onClose}
        renderDrawerContent={() => {
          return <DrawerNavigation />;
        }}
      >
        {children}
      </ReactDrawer>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};
