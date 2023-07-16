import { useAuth, useNavigationHelper } from '@context';
import { PagesAuthorized, PagesUnauthorized } from '@pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import { Loading } from '../Loading';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ScreenNavigation: React.FC = () => {
  const { authTokens, authenticating } = useAuth();
  const { currentPage } = useNavigationHelper();
  const selectedScreen = authTokens ? PagesAuthorized : PagesUnauthorized;
  if (authenticating) {
    return <Loading />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={currentPage}
    >
      {selectedScreen.map((page) => {
        return <Stack.Screen key={page.name} name={page.name} component={page.component} />;
      })}
    </Stack.Navigator>
  );
};
