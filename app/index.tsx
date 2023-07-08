import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { mainStyle } from "../src/style/main.style";

const App: React.FC = () => {
  return (
    <View style={mainStyle.container}>
      <Text>This is website for Krishiv Menon</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App
