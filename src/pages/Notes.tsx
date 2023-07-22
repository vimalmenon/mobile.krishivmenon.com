import React from 'react';

import { Loading } from '@common';
import { apis } from '@data';
import { useQuery } from '@hooks';
import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { INotes, RootStackParamList } from '@types';
import { Text, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

import { Layout } from './Layout';

type NotesProps = NativeStackScreenProps<RootStackParamList, 'Notes'>;

export const Notes: React.FC<NotesProps> = ({ route }) => {
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { makeApiCall } = useQuery();
  const { dispatch } = useNavigation();
  React.useEffect(() => {
    setLoading(true);
    makeApiCall<INotes[]>(apis.getNotes())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Layout page={route.name}>
      <View className="flex-1">
        {loading ? (
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
