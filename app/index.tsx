import { Header, Drawer } from '@common';
import { AppContext } from '@context';
import { Screens } from '@pages';
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
            <Screens />
          </Drawer>
        </PaperProvider>
      </AppContext>
    </NavigationContainer>
  );
};

export default App;
