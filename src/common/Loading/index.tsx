import { Text, SafeAreaView, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { ILoading } from './Loading';

export const Loading: React.FC<ILoading> = ({ text }) => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <View className="flex flex-row items-center">
        <ActivityIndicator animating={true} size="large" />
        <Text className="mx-5">{text}</Text>
      </View>
    </SafeAreaView>
  );
};
