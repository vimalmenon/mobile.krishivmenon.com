import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, SafeAreaView, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Layout } from './Layout';

type NoteDetailProps = NativeStackScreenProps<RootStackParamList, 'NoteDetail'>;

export const NoteDetail: React.FC<NoteDetailProps> = ({ route }) => {
  return (
    <Layout>
      <SafeAreaView className="flex-1 px-2">
        <View className="m-2">
          <Text>{route.params.title}</Text>
        </View>
        <View>
          <Text>{route.params.content}</Text>
        </View>
        <View>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </View>
      </SafeAreaView>
    </Layout>
  );
};
