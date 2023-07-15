import React from 'react';

import { useAuth } from '@context';
import { Text, View, Button } from 'react-native';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <View>
      <Text>Login Page</Text>
      <Button
        title="Passwordless Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};
