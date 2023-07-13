import { useAppContext, useDrawerHelper } from '@context';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export const Header: React.FC = () => {
  const { currentPage } = useAppContext();
  const { onToggle } = useDrawerHelper();
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={onToggle} />
        <Appbar.Content title={currentPage} />
        {/* <Appbar.Action icon="dots-vertical" onPress={onClick} /> */}
      </Appbar.Header>
    </View>
  );
};
