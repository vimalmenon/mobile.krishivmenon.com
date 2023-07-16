import React from 'react';

import { useAuth } from '@context';
import { View, Button, SafeAreaView } from 'react-native';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <SafeAreaView>
      <Button
        title="Google Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </SafeAreaView>
  );
};
