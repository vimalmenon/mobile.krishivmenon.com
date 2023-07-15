import { useAuth } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import { Authenticating } from '../Authenticating';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ScreenNavigation: React.FC = () => {
  const { authTokens, authenticating } = useAuth();
  const selectedScreen = authTokens ? PagesAuthorized : PagesUnauthorized;
  if (authenticating) {
    return <Authenticating />;
  }
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
