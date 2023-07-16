import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages';
import { View } from 'react-native';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { onNavigate, currentPage } = useNavigationHelper();
  const { authTokens } = useAuth();
  const selectedDrawer = authTokens ? PagesAuthorized : PagesUnauthorized;
  return (
    <React.Fragment>
      <View>
        {selectedDrawer.map((page) => {
          if (page.showInDrawer) {
            return (
              <Drawer.Item
                key={page.name}
                icon={page.icon}
                label={page.name}
                onPress={() => onNavigate(page.name)}
                active={currentPage === page.name}
              />
            );
          }
          return null;
        })}
      </View>
      <View>
        <Drawer.Item label="Log out" />
      </View>
    </React.Fragment>
  );
};
