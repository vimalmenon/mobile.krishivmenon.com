import React from 'react';

import { useAuth } from '@context';
import { View, Button } from 'react-native';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <View>
      <Button
        title="Google Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};
