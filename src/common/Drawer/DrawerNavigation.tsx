import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { PagesAuthorized, Pages } from '@data';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { onNavigate, currentPage } = useNavigationHelper();
  const { token } = useAuth();
  const selectedDrawer = token ? PagesAuthorized : Pages;
  return (
    <React.Fragment>
      {selectedDrawer.map((page) => {
        return (
          <Drawer.Item
            key={page.name}
            icon={page.icon}
            label={page.name}
            onPress={() => onNavigate(page.name)}
            active={currentPage === page.name}
          />
        );
      })}
    </React.Fragment>
  );
};
