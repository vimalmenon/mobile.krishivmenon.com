import { useAppContext, useDrawerHelper } from '@context';
import { PageMap } from '@pages';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';

export const Header: React.FC = () => {
  const { currentPage } = useAppContext();
  const { onToggle } = useDrawerHelper();
  const selectedPage = PageMap[currentPage];
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={onToggle} />
        <Appbar.Content title={selectedPage.title} />
        {/* <Appbar.Action icon="dots-vertical" onPress={onClick} /> */}
      </Appbar.Header>
    </View>
  );
};
