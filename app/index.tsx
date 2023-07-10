import { Text, View } from 'react-native';
import { mainStyle } from "../src/style/main.style";
import { PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: {
    id: number,
  }
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen: React.FC<Props> = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} initialParams={{ id: 1 }} />
        </Stack.Navigator>
        <View style={mainStyle.container}>
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
