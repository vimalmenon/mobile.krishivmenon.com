import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { PaperProvider, Drawer } from 'react-native-paper';

import { Header, Navigation } from '../src/common';
import { AppContext } from '../src/context';
import { Home, Gallery, Notes } from '../src/pages';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const onClick = () => {
    console.log('this is clicked');
  };
  return (
    <NavigationContainer>
      <AppContext>
        <PaperProvider>
          <Header />
          <Drawer.Section title="Some title">
            <Drawer.Item label="First Item" active={true} onPress={onClick} />
            <Drawer.Item label="Second Item" active={false} onPress={onClick} />
          </Drawer.Section>

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
          <Navigation />
        </PaperProvider>
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
