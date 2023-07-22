import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import { Layout } from './Layout';

type NoteDetailProps = NativeStackScreenProps<RootStackParamList, 'NoteDetail'>;

export const NoteDetail: React.FC<NoteDetailProps> = ({ route }) => {
  return (
    <Layout page={route.name}>
      <View className="flex-1 p-3">
        <View className="flex">
          <Text>{route.params.title}</Text>
        </View>
        <View className="flex-1">
          <Text>{route.params.content}</Text>
        </View>
        <View className="flex flex-row justify-between">
          <Button mode="contained">Save</Button>
          <Button mode="contained">Cancel</Button>
        </View>
      </View>
    </Layout>
  );
};
