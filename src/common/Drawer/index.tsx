import React from 'react';

import { useDrawerHelper } from '@context';
import { ReactChildren } from '@types';
import { Drawer as ReactDrawer } from 'react-native-drawer-layout';

import { DrawerNavigation } from './DrawerNavigation';

export const Drawer: React.FC<ReactChildren> = ({ children }) => {
  const { drawerOpen, onOpen, onClose } = useDrawerHelper();
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
};
