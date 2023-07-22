import { Loading } from '@common';
import { useAuth } from '@context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import { PagesAuthorized, PagesUnauthorized } from './data';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Screens: React.FC = () => {
  const { authTokens, authenticating } = useAuth();
  const selectedScreen = authTokens ? PagesAuthorized : PagesUnauthorized;
  if (authenticating) {
    return <Loading text="Authenticating" />;
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
