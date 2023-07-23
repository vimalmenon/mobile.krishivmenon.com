import React from 'react';

import { useNavigationHelper, useAuth } from '@context';
import { useNavigation, StackActions } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import { Drawer } from 'react-native-paper';

export const DrawerNavigation: React.FC = () => {
  const { currentPage, Pages } = useNavigationHelper();
  const { logout } = useAuth();
  const { dispatch } = useNavigation();
  return (
    <SafeAreaView className="flex-1 justify-between">
      <View>
        {Pages.map((page) => {
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
