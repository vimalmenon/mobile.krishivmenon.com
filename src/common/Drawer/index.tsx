import React from 'react';

import { Button, Text } from 'react-native';
import { Drawer as ReactDrawer } from 'react-native-drawer-layout';

import { ReactChildren } from '../../types';

export const Drawer: React.FC<ReactChildren> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <ReactDrawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Text>Drawer content</Text>;
      }}
    >
      <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      />
      {children}
    </ReactDrawer>
  );
};
