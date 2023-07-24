import React from 'react';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { INotes, RootStackParamList } from '@types';
import { Text, View } from 'react-native';
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
      <View className="flex-1 p-3">
        <View className="flex">
          <TextInput value={note.title} onChangeText={(value) => onChange('title', value)} />
        </View>
        <View className="flex-1">
          <Text>{note.content}</Text>
        </View>
        <View className="flex flex-row justify-between">
          <Button mode="contained">Save</Button>
          <Button mode="contained">Cancel</Button>
        </View>
      </View>
    </Layout>
  );
};
