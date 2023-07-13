import { Header, Drawer } from '@common';
import { AppContext } from '@context';
import { NavigationContainer } from '@react-navigation/native';
import { ReactChildren } from '@types';
import { PaperProvider } from 'react-native-paper';

export const Layout: React.FC<ReactChildren> = ({ children }) => {
  return (
    <NavigationContainer>
      <AppContext>
        <PaperProvider>
          <Header />
          <Drawer>{children}</Drawer>
        </PaperProvider>
      </AppContext>
    </NavigationContainer>
  );
};
