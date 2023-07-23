import { Loading } from '@common';
import { useAuth } from '@context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import { Pages } from './data';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Screens: React.FC = () => {
  const { authTokens, authenticating } = useAuth();
  if (authenticating) {
    return (
      <Loading text={authenticating === 'Authenticating' ? 'Authenticating' : 'Logging out'} />
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={authTokens ? 'Home' : 'Login'}
    >
      {Pages.map((page) => {
        return <Stack.Screen key={page.name} name={page.name} component={page.component} />;
      })}
    </Stack.Navigator>
  );
};
