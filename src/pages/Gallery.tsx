import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, View } from 'react-native';

import { Layout } from './Layout';

type GalleryProps = NativeStackScreenProps<RootStackParamList, 'Gallery'>;

export const Gallery: React.FC<GalleryProps> = ({ route }) => {
  return (
    <Layout page={route.name}>
      <View>
        <Text>Gallery Screen</Text>
      </View>
    </Layout>
  );
};
