import { useIsFocused } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, View } from 'react-native';

import { Layout } from './Layout';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home: React.FC<HomeProps> = ({ route }) => {
  const isFocused = useIsFocused();

  return (
    <Layout page={route.name}>
      <View>
        <Text>{isFocused} Home Screen</Text>
      </View>
    </Layout>
  );
};
