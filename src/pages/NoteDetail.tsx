import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { INotes, RootStackParamList } from '@types';
import { View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import { Layout } from './Layout';

type NoteDetailProps = NativeStackScreenProps<RootStackParamList, 'NoteDetail'>;

export const NoteDetail: React.FC<NoteDetailProps> = ({ route }) => {
  const [note, setNote] = React.useState<INotes>(route.params);
  const onChange = (key: string, value: string): void => {
    setNote({ ...note, [key]: value });
  };
  return (
    <Layout page={route.name}>
      <View className="flex-1 p-3 gap-2">
        <View className="flex my-1">
          <TextInput value={note.title} onChangeText={(value) => onChange('title', value)} />
        </View>
        <View className="flex-1 my-1">
          <TextInput
            value={note.content}
            onChangeText={(value) => onChange('content', value)}
            multiline
            className="flex-1"
          />
        </View>
        <View className="flex flex-row justify-between">
          <Button mode="contained">Save</Button>
          <Button mode="contained">Cancel</Button>
        </View>
      </View>
    </Layout>
  );
};
