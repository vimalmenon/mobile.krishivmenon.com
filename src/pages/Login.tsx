import React from 'react';

import { useAuth } from '@context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '@types';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { Layout } from './Layout';

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const Login: React.FC<LoginProps> = ({ route }) => {
  const { promptAsync } = useAuth();
  return (
    <Layout page={route.name}>
      <View className="flex-1 justify-center gap-7">
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
      </View>
    </Layout>
  );
};
