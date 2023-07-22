import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages/data';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { currentPage } = useNavigationHelper();
  const { authTokens, logout } = useAuth();
  const { dispatch } = useNavigation();
  const selectedDrawer = authTokens ? PagesAuthorized : PagesUnauthorized;
  return (
    <SafeAreaView className="flex-1 justify-between">
      <View>
        {selectedDrawer.map((page) => {
          if (page.showInDrawer) {
            return (
              <Drawer.Item
                key={page.name}
                icon={page.icon}
                label={page.name}
                onPress={() => dispatch(StackActions.replace(page.name))}
                active={currentPage.name === page.name}
              />
            );
          }
          return null;
        })}
      </View>
      <View>
        <Drawer.Item label="Logout" icon="logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};
