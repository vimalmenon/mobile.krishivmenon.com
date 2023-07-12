import React from 'react';

import { useNavigationHelper } from '@context';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { onNavigate } = useNavigationHelper();
  return (
    <React.Fragment>
      <Drawer.Item icon="home" label="Home" onPress={() => onNavigate('Home')} />
      <Drawer.Item icon="view-gallery" label="Gallery" onPress={() => onNavigate('Gallery')} />
      <Drawer.Item icon="note" label="Notes" onPress={() => onNavigate('Notes')} />
    </React.Fragment>
  );
};
