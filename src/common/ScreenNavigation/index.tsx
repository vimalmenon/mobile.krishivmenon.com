import { useAuth } from '@context';
import { PagesAuthorized, Pages } from '@pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ScreenNavigation: React.FC = () => {
  const { authTokens } = useAuth();
  const selectedScreen = authTokens ? PagesAuthorized : Pages;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={authTokens ? 'Home' : 'Login'}
    >
      {selectedScreen.map((page) => {
        return <Stack.Screen key={page.name} name={page.name} component={page.component} />;
      })}
    </Stack.Navigator>
  );
};
