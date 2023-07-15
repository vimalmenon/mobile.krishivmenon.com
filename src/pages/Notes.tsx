import React from 'react';

import { apis } from '@data';
import { useQuery } from '@hooks';
import { INotes } from '@types';
import { Text, View } from 'react-native';

export const Notes: React.FC = () => {
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const { makeApiCall } = useQuery();
  React.useEffect(() => {
    makeApiCall<INotes[]>(apis.getNotes())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {notes.map((note) => {
        return <Text key={note.id}>{note.title}</Text>;
      })}
    </View>
  );
};
