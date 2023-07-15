import React from 'react';

import { apis } from '@data';
import { useQuery } from '@hooks';
import { Text, View } from 'react-native';

export const Notes: React.FC = () => {
  const [notes, setNotes] = React.useState<any[]>([]);
  const { makeApiCall } = useQuery();
  React.useEffect(() => {
    makeApiCall<any[], any>(apis.getNotes())
      .then((data) => {
        setNotes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notes Screen</Text>
    </View>
  );
};
