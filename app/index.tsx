import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import { Home } from "./Home";
import { Gallery } from "./Gallery";
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
            <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
            <Stack.Screen name="Gallery" component={Gallery} options={{ title: "Gallery" }} />
          </Stack.Navigator>
          <Navigation />
        </PaperProvider>
      </AppContext>

    </NavigationContainer>
  );
}

export default App
