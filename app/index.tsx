import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Gallery, Notes } from "../src/pages";
import { RootStackParamList } from "../src/types";
import { Header, Navigation } from "../src/common";
import { AppContext } from "../src/context"


const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <PaperProvider>
          <Header />
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Gallery" component={Gallery} />
            <Stack.Screen name="Notes" component={Notes} />
          </Stack.Navigator>
          <Navigation />
        </PaperProvider>
      </AppContext>

    </NavigationContainer>
  );
}

export default App
