import { Header, Drawer, ScreenNavigation } from '@common';
import { AppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { maybeCompleteAuthSession } from 'expo-web-browser';
import { PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

maybeCompleteAuthSession();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <AppContext>
        <PaperProvider>
          <Header />
          <Drawer>
            <ScreenNavigation />
          </Drawer>
        </PaperProvider>
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
