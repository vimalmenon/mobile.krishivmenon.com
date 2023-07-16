import React from 'react';

import { useAuth } from '@context';
import { View, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="justify-items-center items-center mb-5">
        <Text>Krishiv Menon</Text>
      </View>
      <View>
        <Button
          mode="outlined"
          icon="google"
          onPress={() => {
            promptAsync();
          }}
        >
          Google
        </Button>
      </View>
    </SafeAreaView>
  );
};
