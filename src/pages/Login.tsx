import React from 'react';

import { useAuth } from '@context';
import { View, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { Layout } from './Layout';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <Layout>
      <SafeAreaView className="flex-1 justify-center gap-7">
        <View className="justify-items-center items-center">
          <Text className="text-4xl font-bold text-stone-700">Krishiv Menon</Text>
        </View>
        <View className="flex p-2">
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
    </Layout>
  );
};
