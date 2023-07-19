import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
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
                onPress={() =>
                  page.navigationType === 'navigate'
                    ? dispatch(StackActions.push(page.name))
                    : dispatch(StackActions.replace(page.name))
                }
                active={currentPage === page.name}
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
