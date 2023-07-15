import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { onNavigate, currentPage } = useNavigationHelper();
  const { authTokens } = useAuth();
  const selectedDrawer = authTokens ? PagesAuthorized : PagesUnauthorized;
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
