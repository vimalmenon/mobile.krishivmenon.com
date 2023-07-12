import React from 'react';

import { useDrawerHelper } from '@context';
import { ReactChildren } from '@types';
import { Text } from 'react-native';
import { Drawer as ReactDrawer } from 'react-native-drawer-layout';

export const Drawer: React.FC<ReactChildren> = ({ children }) => {
  const { drawerOpen, onOpen, onClose } = useDrawerHelper();
  return (
    <ReactDrawer
      open={drawerOpen}
      onOpen={onOpen}
      onClose={onClose}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      {children}
    </ReactDrawer>
  );
};
