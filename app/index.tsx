import { Header, Navigation, Drawer } from '@common';
import { AppContext } from '@context';
import { Home, Gallery, Notes } from '@pages';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { PaperProvider } from 'react-native-paper';

import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <PaperProvider>
          <Header />
          <Drawer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Gallery" component={Gallery} />
              <Stack.Screen name="Notes" component={Notes} />
            </Stack.Navigator>
          </Drawer>
          <Navigation />
        </PaperProvider>
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
