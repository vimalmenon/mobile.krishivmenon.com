import { useAuth } from '@context';
import { PagesAuthorized, Pages } from '@data';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ScreenNavigation: React.FC = () => {
  const { token } = useAuth();
  const selectedScreen = token ? PagesAuthorized : Pages;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={token ? 'Home' : 'Login'}
    >
      {selectedScreen.map((page) => {
        return <Stack.Screen key={page.name} name={page.name} component={page.component} />;
      })}
    </Stack.Navigator>
  );
};
