import React from 'react';

import { useAuth } from '@context';
import { View, Button, SafeAreaView, Text, StyleSheet } from 'react-native';

export const Login: React.FC = () => {
  const { promptAsync } = useAuth();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>Krishiv Menon</Text>
      </View>
      <View>
        <Button
          title="Google Login"
          onPress={() => {
            promptAsync();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
});
