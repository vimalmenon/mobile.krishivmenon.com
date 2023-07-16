import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { ILoading } from './Loading';

export const Loading: React.FC<ILoading> = ({ text }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text>{text}</Text>
        <ActivityIndicator animating={true} size="large" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
