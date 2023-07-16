import React from 'react';

import { Loading } from '@common';
import { apis } from '@data';
import { useQuery } from '@hooks';
import { INotes } from '@types';
import { Text, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';

export const Notes: React.FC = () => {
  const [notes, setNotes] = React.useState<INotes[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { makeApiCall } = useQuery();
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
  if (loading) {
    return <Loading text="Loading Notes" />;
  }

  return (
    <View className="flex-1">
      <View>
        {notes.map((note) => {
          return (
            <TouchableOpacity
              key={note.id}
              className="flex flex-row items-center justify-between mx-2"
            >
              <Text className="text-2xl">{note.title}</Text>
              <IconButton icon="close" />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
