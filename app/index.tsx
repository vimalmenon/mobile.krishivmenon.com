import { Text, View } from 'react-native';
import { PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Home } from "./Home";
import { Gallery } from "./Gallery";
import { RootStackParamList } from "../src/types";


const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  const navigation = useNavigation<any>()
  return (
    <View>
      <Button mode="contained" onPress={() => navigation.navigate("Home")}>
        Home
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate("Gallery")}>
        Gallery
      </Button>
    </View>
  )
}

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Gallery" component={Gallery} />
        </Stack.Navigator>
        <View>
          <Navigation />
        </View>
      </PaperProvider>
    </NavigationContainer>
  );
}

export default App
