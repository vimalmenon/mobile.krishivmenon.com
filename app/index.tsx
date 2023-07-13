import { Layout } from '@common';
import { Home, Gallery, Notes, Login } from '@pages';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <Layout>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gallery" component={Gallery} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </Layout>
  );
};

export default App;
