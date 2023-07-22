import { useProfile } from '@context';
import { Image, View } from 'react-native';
import { Text, IconButton } from 'react-native-paper';

export const Profile: React.FC = () => {
  const { profile } = useProfile();
  if (profile) {
    return (
      <View>
        <Image
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
