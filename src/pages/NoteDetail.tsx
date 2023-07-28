import React from 'react';

import { Loading } from '@common';
import { useNotes } from '@context';
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
  const { deleteNote, loadingNotes, saveNote } = useNotes();
  return (
    <Layout page={route.name}>
      {loadingNotes ? (
        <View className="flex-1">
          <Loading text="Deleting Note" />
        </View>
      ) : (
        <>
          <View className="flex flex-row justify-between p-3">
            <Button mode="contained" onPress={() => saveNote(note)}>
              Save
            </Button>
            <Button mode="contained" onPress={() => deleteNote(note)}>
              Delete
            </Button>
          </View>
          <View className="flex-1 p-3 gap-2">
            <View className="flex my-1">
              <TextInput value={note.title} onChangeText={(value) => onChange('title', value)} />
            </View>
            <View className="flex-1 my-1">
              <TextInput
                value={note.content}
                onChangeText={(value) => onChange('content', value)}
                multiline
              />
            </View>
          </View>
        </>
      )}
    </Layout>
  );
};
