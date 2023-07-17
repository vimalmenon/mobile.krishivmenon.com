import { Text, View } from 'react-native';

import { Layout } from './Layout';

export const Gallery: React.FC = () => {
  return (
    <Layout>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Gallery Screen</Text>
      </View>
    </Layout>
  );
};
