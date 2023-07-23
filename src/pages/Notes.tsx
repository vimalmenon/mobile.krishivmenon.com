import React from 'react';

import { Loading } from '@common';
import { useNotes } from '@context';
import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { Text, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

import { Layout } from './Layout';

type NotesProps = NativeStackScreenProps<RootStackParamList, 'Notes'>;

export const Notes: React.FC<NotesProps> = ({ route }) => {
  const { getNotes, notes, loadingNotes } = useNotes();
  const { dispatch } = useNavigation();
  React.useEffect(() => {
    getNotes();
  }, []);
  return (
    <Layout page={route.name}>
      <View className="flex-1">
        {loadingNotes ? (
          <View className="flex-1">
            <Loading text="Loading Notes" />
          </View>
        ) : (
          <View>
            {notes.map((note) => {
              return (
                <TouchableOpacity
                  key={note.id}
                  className="flex flex-row items-center justify-between mx-2"
                  onPress={() => dispatch(StackActions.push('NoteDetail', note))}
                >
                  <Text className="text-2xl">{note.title}</Text>
                  <IconButton icon="close" />
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </Layout>
  );
};
