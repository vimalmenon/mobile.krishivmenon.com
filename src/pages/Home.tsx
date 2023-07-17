import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, View } from 'react-native';

import { Layout } from './Layout';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    </Layout>
  );
};
