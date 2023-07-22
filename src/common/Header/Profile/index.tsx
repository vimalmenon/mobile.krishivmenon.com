import { useProfile } from '@context';
import { Image, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const Profile: React.FC = () => {
  const { profile } = useProfile();
  if (profile) {
    return (
      <View className="w-12 h-12">
        <Image
          width={40}
          height={40}
          className="rounded-full"
          source={{
            uri: profile.avatar,
          }}
        />
      </View>
    );
  }
  return (
    <View className="w-12 h-12">
      <ActivityIndicator animating={true} size="small" className="flex-1" />
    </View>
  );
};
