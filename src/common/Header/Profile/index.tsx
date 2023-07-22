import { useProfile } from '@context';
import { Image, View } from 'react-native';
import { IconButton } from 'react-native-paper';

export const Profile: React.FC = () => {
  const { profile } = useProfile();
  if (profile) {
    return (
      <View className="w-12 h-12">
        <Image
          width={45}
          height={45}
          className="rounded-full"
          source={{
            uri: profile.avatar,
          }}
        />
      </View>
    );
  }
  return (
    <View>
      <IconButton icon="loading" size={20} />
    </View>
  );
};
