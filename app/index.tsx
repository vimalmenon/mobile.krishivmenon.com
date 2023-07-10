import { Text, View } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "./Home";
import { Gallery } from "./Gallery";
import { RootStackParamList } from "../src/types";


const Stack = createNativeStackNavigator<RootStackParamList>();


const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gallery" component={Gallery} />
        </Stack.Navigator>
        <View>
          <Text>This is the App for Krishiv Menon</Text>
          <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
            Press me
          </Button>
        </View>

      </PaperProvider>
    </NavigationContainer>
  );
}

export default App
